const PATTERNS: Record<string, { name: string; phases: { label: string; kanji: string; s: number; type: string }[] }> = {
    relax: { name: 'Relax 4–6', phases: [{ label: 'Inhale', kanji: '吸', s: 4, type: 'inhale' }, { label: 'Exhale', kanji: '呼', s: 6, type: 'exhale' }] },
    box: { name: 'Box Breathing', phases: [{ label: 'Inhale', kanji: '吸', s: 4, type: 'inhale' }, { label: 'Hold', kanji: '止', s: 4, type: 'hold' }, { label: 'Exhale', kanji: '呼', s: 4, type: 'exhale' }, { label: 'Hold', kanji: '止', s: 4, type: 'hold' }] },
    '478': { name: '4–7–8 Sleep', phases: [{ label: 'Inhale', kanji: '吸', s: 4, type: 'inhale' }, { label: 'Hold', kanji: '止', s: 7, type: 'hold' }, { label: 'Exhale', kanji: '呼', s: 8, type: 'exhale' }] },
    energise: { name: 'Energise 6–2', phases: [{ label: 'Inhale', kanji: '吸', s: 6, type: 'inhale' }, { label: 'Exhale', kanji: '呼', s: 2, type: 'exhale' }] }
};

let currentKey = 'relax', totalCycles = 5, running = false;
let currentCycle = 0, currentPhaseIdx = 0;
let phaseTimer: ReturnType<typeof setTimeout> | null = null;
let countTimer: ReturnType<typeof setInterval> | null = null;
let animFrame: number | null = null;

const $ = (id: string) => document.getElementById(id)!;
const orbCore = $('orbCore'), orbKanji = $('orbKanji'), orbPhase = $('orbPhase'), orbCount = $('orbCount');
const orbAura = $('orbAura') as HTMLElement, arcFill = $('arcFill') as unknown as HTMLElement;
const actionBtn = $('actionBtn'), completion = $('completion'), ensoRing = $('ensoRing');

// Pattern selection
document.querySelectorAll('.pattern-item').forEach((el) => {
    el.addEventListener('click', () => {
        if (running) return;
        const key = (el as HTMLElement).dataset.pattern!;
        currentKey = key;
        document.querySelectorAll('.pattern-item').forEach(i => i.classList.remove('active'));
        el.classList.add('active');
        $('infoPattern').textContent = PATTERNS[key].name;
        refreshInfo(); buildDots();
    });
});

// Cycle selection
document.querySelectorAll('.cycle-btn').forEach((el) => {
    el.addEventListener('click', () => {
        if (running) return;
        const n = parseInt((el as HTMLElement).dataset.cycles!);
        totalCycles = n;
        document.querySelectorAll('.cycle-btn').forEach(b => b.classList.toggle('active', parseInt(b.textContent!) === n));
        refreshInfo(); buildDots();
    });
});

// Session toggle
actionBtn.addEventListener('click', toggleSession);
$('orbCore').addEventListener('click', toggleSession);
$('resetBtn').addEventListener('click', resetSession);

function refreshInfo() {
    const total = PATTERNS[currentKey].phases.reduce((s, p) => s + p.s, 0) * totalCycles;
    const m = Math.floor(total / 60), s = total % 60;
    $('infoTime').textContent = s === 0 ? `${m}m` : `${m}m ${s}s`;
}

function buildDots() {
    const d = $('cycleDots'); d.innerHTML = '';
    for (let i = 0; i < totalCycles; i++) {
        const dot = document.createElement('div');
        dot.className = 'cdot'; dot.id = 'cdot-' + i;
        d.appendChild(dot);
    }
}

function updateDots() {
    for (let i = 0; i < totalCycles; i++) {
        const d = $('cdot-' + i); if (!d) continue;
        d.classList.remove('active', 'done');
        if (i < currentCycle) d.classList.add('done');
        else if (i === currentCycle) d.classList.add('active');
    }
}

function toggleSession() { running ? stopSession() : startSession(); }

function startSession() {
    running = true; currentCycle = 0; currentPhaseIdx = 0;
    completion.classList.remove('visible');
    actionBtn.innerHTML = '<span class="action-btn-line"></span>End session';
    orbAura.style.opacity = '0.8';
    runPhase();
}

function stopSession() {
    running = false;
    if (phaseTimer) clearTimeout(phaseTimer);
    if (countTimer) clearInterval(countTimer);
    if (animFrame) cancelAnimationFrame(animFrame);
    resetVisual();
    actionBtn.innerHTML = '<span class="action-btn-line"></span>Begin the practice';
    buildDots(); setAmbient('idle');
}

function runPhase() {
    if (!running) return;
    const phase = PATTERNS[currentKey].phases[currentPhaseIdx];
    updateDots(); setAmbient(phase.type);
    orbKanji.textContent = phase.kanji;
    orbPhase.textContent = phase.label.toLowerCase();
    animateArc(phase); animateOrb(phase);

    let rem = phase.s;
    orbCount.textContent = String(rem);
    if (countTimer) clearInterval(countTimer);
    countTimer = setInterval(() => { rem--; if (rem > 0) orbCount.textContent = String(rem); }, 1000);

    phaseTimer = setTimeout(() => {
        if (countTimer) clearInterval(countTimer);
        currentPhaseIdx++;
        if (currentPhaseIdx >= PATTERNS[currentKey].phases.length) {
            currentPhaseIdx = 0; currentCycle++;
            if (currentCycle >= totalCycles) { finishSession(); return; }
        }
        runPhase();
    }, phase.s * 1000);
}

function animateOrb(phase: { s: number; type: string }) {
    if (animFrame) cancelAnimationFrame(animFrame);
    const dur = phase.s * 1000, start = Date.now();
    const core = orbCore as HTMLElement, aura = orbAura;
    if (phase.type === 'inhale') {
        const go = () => {
            const t = Math.min((Date.now() - start) / dur, 1), e = 1 - Math.pow(1 - t, 2.5);
            core.style.transform = `scale(${1 + e * 0.18})`; aura.style.transform = `scale(${1 + e * 0.3})`;
            if (t < 1 && running) animFrame = requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
    } else if (phase.type === 'exhale') {
        const go = () => {
            const t = Math.min((Date.now() - start) / dur, 1), e = Math.pow(t, 0.5);
            core.style.transform = `scale(${1.18 - e * 0.18})`; aura.style.transform = `scale(${1.3 - e * 0.3})`;
            if (t < 1 && running) animFrame = requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
    } else {
        const go = () => {
            const p = Math.sin((Date.now() - start) * 0.003) * 0.01;
            core.style.transform = `scale(${1.18 + p})`; aura.style.transform = `scale(${1.28 + p * 1.5})`;
            if (running && (Date.now() - start) < dur) animFrame = requestAnimationFrame(go);
        };
        requestAnimationFrame(go);
    }
}

function animateArc(phase: { s: number; type: string }) {
    arcFill.style.transition = 'none';
    arcFill.style.strokeDashoffset = '314';
    arcFill.style.stroke = ({ inhale: '#b0a894', hold: '#c8c0b0', exhale: '#8a9e95' } as Record<string, string>)[phase.type] || '#b0a894';
    requestAnimationFrame(() => {
        arcFill.style.transition = `stroke-dashoffset ${phase.s}s linear`;
        arcFill.style.strokeDashoffset = '0';
    });
}

function setAmbient(type: string) {
    const s = (id: string, o: string) => { const e = document.getElementById(id); if (e) (e as HTMLElement).style.opacity = o; };
    if (type === 'inhale') { s('blobTl', '0.35'); s('blobCenter', '0.25'); s('blobBr', '0.12'); }
    else if (type === 'exhale') { s('blobTl', '0.12'); s('blobCenter', '0.1'); s('blobBr', '0.32'); }
    else if (type === 'hold') { s('blobCenter', '0.22'); }
    else { s('blobTl', '0.25'); s('blobBr', '0.2'); s('blobCenter', '0.15'); }
}

function resetVisual() {
    (orbCore as HTMLElement).style.transform = 'scale(1)';
    orbAura.style.transform = 'scale(1)'; orbAura.style.opacity = '0';
    orbKanji.textContent = '息'; orbPhase.textContent = 'begin'; orbCount.textContent = '';
    arcFill.style.strokeDashoffset = '314';
}

function finishSession() {
    running = false;
    if (phaseTimer) clearTimeout(phaseTimer);
    if (countTimer) clearInterval(countTimer);
    if (animFrame) cancelAnimationFrame(animFrame);
    for (let i = 0; i < totalCycles; i++) {
        const d = document.getElementById('cdot-' + i);
        if (d) { d.classList.remove('active'); d.classList.add('done'); }
    }
    orbKanji.textContent = '息'; orbPhase.textContent = 'complete'; orbCount.textContent = '';
    (orbCore as HTMLElement).style.transform = 'scale(1.04)';
    arcFill.style.strokeDashoffset = '0';
    actionBtn.innerHTML = '<span class="action-btn-line"></span>Begin the practice';
    setTimeout(() => completion.classList.add('visible'), 600);
    setAmbient('idle');
}

function resetSession() {
    completion.classList.remove('visible'); resetVisual(); buildDots();
    currentCycle = 0; currentPhaseIdx = 0;
}

// Enso slow rotation
let ensoAngle = 0;
(function rot() { ensoAngle += 0.012; ensoRing.style.transform = `rotate(${ensoAngle}deg)`; requestAnimationFrame(rot); })();

buildDots(); refreshInfo();
