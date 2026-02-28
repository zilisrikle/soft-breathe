// i18n.js — Lightweight client-side language toggle for Soft Breathe

export const translations = {
    // ─── Nav & Footer ───
    'nav.home': { en: 'Home', zh: '首页' },
    'nav.practice': { en: 'Practice', zh: '练习' },
    'nav.science': { en: 'Science', zh: '科学' },
    'nav.collective': { en: 'Collective', zh: '社区' },

    // ─── Homepage (index.astro) ───
    'home.hero.source': { en: '— Patañjali · ~200 B.C.', zh: '— 帕坦伽利 · 约公元前200年' },
    'home.hero.h1': { en: 'The mind is a kite.<br><em>The breath</em><br>is the string.', zh: '心如风筝。<br><em>呼吸</em><br>是那根线。' },
    'home.hero.sub': { en: 'Left untended, the mind floats away — into worry, into noise, into everything except here. Breath is the only thread that pulls it back. Not by force. By rhythm. Soft Breathe is where that thread becomes a daily practice.', zh: '无人看管时，心会飘走——飘向焦虑、噪音，飘向一切不在此处的地方。呼吸是唯一能将它拉回的线。不是靠力量，而是靠节奏。Soft Breathe，让呼吸成为每日的练习。' },
    'home.hero.cta': { en: 'Take hold of the string', zh: '握住那根线' },
    'home.divider1': { en: 'Prāṇa · Vagus · Sandhyā', zh: '普拉纳 · 迷走神经 · 三昧' },
    'home.wisdom.label': { en: 'The same discovery, 2,000 years apart', zh: '同一个发现，跨越两千年' },
    'home.wisdom.h2': { en: 'Breath is the only door<br>between the <em>conscious</em><br>and the <em>autonomous.</em>', zh: '呼吸是唯一的门<br>连接<em>意识</em><br>与<em>自主神经。</em>' },
    'home.wisdom.body': { en: 'Your heartbeat, digestion, immune response — all beyond reach. Breath alone crosses the threshold. Patañjali understood this in 200 B.C. Neuroscience confirmed it in the 20th century. The mechanism was always the same: regulate the lungs, and the heart and vagus nerve follow.', zh: '心跳、消化、免疫反应——都无法触及。唯有呼吸能跨越这道门槛。帕坦伽利在公元前200年便已理解此理，现代神经科学在20世纪证实了它。机制始终如一：调节肺部，心脏和迷走神经便随之而动。' },
    'home.pillar1.source': { en: 'Patañjali · Yoga Sutras · ~200 B.C.', zh: '帕坦伽利 · 瑜伽经 · 约公元前200年' },
    'home.pillar1.title': { en: 'Prāṇa', zh: '普拉纳' },
    'home.pillar1.body': { en: 'The subtle force that links mind and body — like a kite and its string. By learning to regulate inhalation, exhalation, and the pause between them, the practitioner gains conscious access to the processes the body normally runs alone.', zh: '连接身心的微妙力量——如风筝与线。通过学习调节吸气、呼气和中间的停顿，修行者便能有意识地触及身体通常自行运转的过程。' },
    'home.pillar2.source': { en: 'Neuroscience · Vagus Nerve · Present', zh: '神经科学 · 迷走神经 · 当代' },
    'home.pillar2.title': { en: 'The Vagus Bridge', zh: '迷走神经之桥' },
    'home.pillar2.body': { en: 'By regulating the motion of the lungs, the heart and vagus nerve are also controlled. Modern research confirms: a slow extended exhale stimulates the vagus nerve directly — shifting the nervous system from threat into rest within minutes.', zh: '调节肺部的运动，心脏和迷走神经也随之受控。现代研究证实：缓慢而延长的呼气能直接刺激迷走神经——在几分钟内将神经系统从威胁模式切换到休息模式。' },
    'home.pillar3.source': { en: 'Patañjali · Yoga Sutras · ~200 B.C.', zh: '帕坦伽利 · 瑜伽经 · 约公元前200年' },
    'home.pillar3.title': { en: 'Sandhyā', zh: '三昧' },
    'home.pillar3.body': { en: 'The moment when both nostrils are open and free of obstruction — a rare, spontaneous equilibrium. The extension of such moments is called sandhyā. Conscious breathing is the practice of learning to find it, and stay.', zh: '两个鼻孔同时畅通无阻的那一刻——一种罕见的自发平衡。延续这种时刻被称为三昧。有意识的呼吸，就是学习找到它、并停留其中的练习。' },
    'home.quote': { en: 'The mind and prana are closely linked — like a kite and a string. When the string is skillfully held, the kite can be made to fly in the desired direction.', zh: '心与气紧密相连——如风筝与线。当线被巧妙地握住时，风筝便能朝着期望的方向飞翔。' },
    'home.quote.attr': { en: '— Patañjali · Yoga Sutras · ~200 B.C.', zh: '— 帕坦伽利 · 瑜伽经 · 约公元前200年' },
    'home.collective.label': { en: 'The Collective', zh: '社区' },
    'home.collective.h2': { en: 'Weekly dispatches on<br><em>prana, neuroscience,</em><br>and the string.', zh: '每周通讯<br><em>普拉纳、神经科学、</em><br>与那根线。' },
    'home.collective.body': { en: 'One practice. One piece of ancient wisdom translated for modern life. One small shift in how you move through the week. No noise. Written from Bali.', zh: '一个练习。一段为现代生活翻译的古老智慧。一个微小的转变。没有噪音。写自巴厘岛。' },
    'home.collective.btn': { en: 'Join the Collective →', zh: '加入社区 →' },
    'home.collective.placeholder': { en: 'your email address', zh: '您的邮箱地址' },

    // ─── Science (science.astro) ───
    'sci.header.label': { en: 'The Science', zh: '科学' },
    'sci.header.h1': { en: 'Why breath is the<br><em>only manual switch</em><br>in your nervous system.', zh: '为什么呼吸是<br>神经系统中<br><em>唯一的手动开关。</em>' },
    'sci.header.body': { en: 'Your heart rate, digestion, immune response — all autonomous. Breath is the single exception. The only involuntary function you can consciously override. That exception is everything.', zh: '心率、消化、免疫反应——全部是自主的。呼吸是唯一的例外。唯一你可以有意识地主动控制的非自主功能。这个例外，便是一切。' },
    'sci.div.mechanism': { en: 'The Mechanism', zh: '机制' },
    'sci.mech.h2': { en: 'Modern life traps us in<br><em>permanent fight-or-flight.</em>', zh: '现代生活让我们困在<br><em>永久的战斗-逃跑模式中。</em>' },
    'sci.mech.p1': { en: 'The autonomic nervous system has two modes. Sympathetic — the accelerator — evolved to handle tigers. Parasympathetic — the brake — handles rest, digestion, and recovery. The problem: your body cannot distinguish between a tiger and an unanswered email.', zh: '自主神经系统有两种模式。交感神经——油门——进化来应对老虎。副交感神经——刹车——负责休息、消化和恢复。问题在于：你的身体无法区分老虎和一封未回复的邮件。' },
    'sci.mech.p2': { en: 'Chronic sympathetic dominance elevates cortisol, tightens the diaphragm, and shallows the breath. The shallower your breath becomes, the more threatened your nervous system believes you are. A self-reinforcing loop.', zh: '慢性交感神经亢进会升高皮质醇、紧缩膈肌、使呼吸变浅。呼吸越浅，你的神经系统就越觉得你在受威胁。一个自我强化的循环。' },
    'sci.mech.p3': { en: 'The exit is the exhale. A slow, extended exhalation stimulates the vagus nerve — the longest nerve in the body, running from brainstem to abdomen — which acts as a direct brake on the stress response. Research published in Scientific Reports shows that a single session of slow, deep breathing measurably increases vagal tone and reduces anxiety within minutes.', zh: '出口在于呼气。缓慢而延长的呼气刺激迷走神经——身体中最长的神经，从脑干一直延伸到腹部——它直接充当压力反应的刹车。《科学报告》发表的研究表明，一次缓慢深呼吸就能在几分钟内显著提高迷走神经张力并减少焦虑。' },
    'sci.sym.label': { en: 'Sympathetic · Fight or Flight', zh: '交感神经 · 战斗或逃跑' },
    'sci.sym.title': { en: 'The Accelerator', zh: '油门' },
    'sci.sym.body': { en: 'Heart rate rises. Cortisol spikes. Breath shallows. Blood moves to the muscles. The brain narrows its focus. Designed for emergencies — destructive when chronic.', zh: '心率上升。皮质醇飙升。呼吸变浅。血液流向肌肉。大脑收窄注意力。为紧急情况设计——长期持续则具破坏性。' },
    'sci.bridge.label': { en: 'The Bridge · Vagus Nerve', zh: '桥梁 · 迷走神经' },
    'sci.bridge.title': { en: 'Breath changes everything.', zh: '呼吸改变一切。' },
    'sci.bridge.body': { en: 'The vagus nerve monitors respiratory rhythm. A longer exhale increases its activity, sending a direct signal: the threat has passed. You are safe. Begin repair.', zh: '迷走神经监测呼吸节奏。较长的呼气增加其活性，发送直接信号：威胁已过。你是安全的。开始修复。' },
    'sci.para.label': { en: 'Parasympathetic · Rest & Digest', zh: '副交感神经 · 休息与消化' },
    'sci.para.title': { en: 'The Brake', zh: '刹车' },
    'sci.para.body': { en: 'Heart rate slows. Cortisol falls. Digestion resumes. The prefrontal cortex — responsible for clear thinking — comes back online. This is the state where healing happens.', zh: '心率减慢。皮质醇下降。消化恢复。前额叶皮层——负责清晰思考——重新上线。这是疗愈发生的状态。' },
    'sci.div.research': { en: 'What the research shows', zh: '研究表明' },
    'sci.res.h2': { en: 'Three mechanisms.<br><em>One practice.</em>', zh: '三种机制。<br><em>一个练习。</em>' },
    'sci.res.intro': { en: 'The benefits of conscious breathing converge on the same underlying physiology — studied separately, they illuminate how profoundly a ten-minute practice can shift the body.', zh: '有意识呼吸的益处汇聚于同一底层生理机制——分别研究它们，便能揭示十分钟的练习能多么深刻地改变身体。' },
    'sci.res1.source': { en: 'Heart Rate Variability', zh: '心率变异性' },
    'sci.res1.title': { en: 'The Resilience Marker', zh: '弹性指标' },
    'sci.res1.body': { en: 'HRV — the variation in time between heartbeats — is one of the strongest predictors of longevity, emotional regulation, and cognitive performance. Slow, rhythmic breathing at approximately 6 breaths per minute has been shown to maximise HRV, creating a state of physiological coherence between heart, lungs, and brain. Research from the University of Brussels found that this coherence state also measurably improves decision-making under stress.', zh: 'HRV——心跳间时间的变化——是寿命、情绪调节和认知表现最强的预测指标之一。每分钟约6次的缓慢、有节奏的呼吸已被证明能最大化HRV，在心脏、肺部和大脑之间创造一种生理协调状态。布鲁塞尔大学的研究发现，这种协调状态还能显著改善压力下的决策能力。' },
    'sci.res2.source': { en: 'CO₂ Tolerance · The Bohr Effect', zh: 'CO₂ 耐受 · 波尔效应' },
    'sci.res2.title': { en: 'Better Oxygen, Paradoxically', zh: '悖论般的更佳供氧' },
    'sci.res2.body': { en: 'Counter-intuitively, over-breathing reduces oxygen delivery to cells. The Bohr Effect explains why: oxygen releases from haemoglobin only in the presence of adequate CO₂. Most anxious, shallow breathers are chronically low in CO₂. Breath retention practices — like the hold in 4–7–8 — build CO₂ tolerance, improving cellular oxygenation and reducing the biological drive to over-breathe.', zh: '反直觉的是，过度呼吸反而会减少细胞的氧气输送。波尔效应解释了原因：氧气只有在足够的CO₂存在时才会从血红蛋白中释放。大多数焦虑的浅呼吸者长期缺乏CO₂。屏息练习——如4-7-8中的屏息——可以建立CO₂耐受力，改善细胞氧合，减少过度呼吸的生理驱动。' },
    'sci.res3.source': { en: 'Cortisol & Emotional Regulation', zh: '皮质醇与情绪调节' },
    'sci.res3.title': { en: 'From Reactive to Responsive', zh: '从被动反应到主动回应' },
    'sci.res3.body': { en: "The vagus nerve's afferent fibres terminate in the nucleus tractus solitarius, which projects directly to the amygdala — the brain's threat-detection centre. Increased vagal tone reduces amygdala reactivity, creating a measurable buffer between stimulus and response. A 2025 clinical study found that six weeks of regular breathwork produced a large reduction in anxiety scores (Cohen's d = 1.44) — an effect size comparable to pharmacological intervention.", zh: '迷走神经的传入纤维终止于孤束核，直接投射到杏仁核——大脑的威胁检测中心。增加的迷走神经张力降低了杏仁核的反应性，在刺激和反应之间创造了可测量的缓冲。2025年的一项临床研究发现，六周的规律呼吸练习显著降低了焦虑评分（Cohen\'s d = 1.44）——效果量可与药物干预相媲美。' },
    'sci.bridge2.label': { en: 'Ancient & Modern', zh: '古今' },
    'sci.bridge2.h2': { en: 'The same discovery,<br><em>two thousand years apart.</em>', zh: '同一个发现，<br><em>跨越两千年。</em>' },
    'sci.tl1.era': { en: '~200 B.C.', zh: '约公元前200年' },
    'sci.tl1.title': { en: "Patañjali's Yoga Sutras", zh: '帕坦伽利的瑜伽经' },
    'sci.tl1.body': { en: 'Prāṇāyāma: conscious regulation of the breath to gain mastery over the autonomic functions of the body. The pause between inhale and exhale described as the gateway to mental stillness.', zh: '调息法：有意识地调节呼吸，以掌控身体的自主功能。吸气和呼气之间的停顿被描述为通往心灵静止的门户。' },
    'sci.tl2.era': { en: '15th Century', zh: '15世纪' },
    'sci.tl2.title': { en: 'Hatha Yoga Pradīpikā', zh: '哈他瑜伽之光' },
    'sci.tl2.body': { en: 'Kumbhaka (breath retention) codified as the central practice of prana regulation. The text explicitly links breath control with control of the mind — the same pathway neuroscience would confirm 500 years later.', zh: '内息（屏息）被编纂为调控生命能量的核心练习。该文本明确将呼吸控制与心灵控制联系起来——神经科学在500年后证实了同一通路。' },
    'sci.tl3.era': { en: '1921', zh: '1921年' },
    'sci.tl3.title': { en: 'Vagus Nerve Identified', zh: '迷走神经被发现' },
    'sci.tl3.body': { en: "Otto Loewi's Nobel Prize-winning discovery of vagal neurotransmission provides the first modern mechanism for how the nervous system can be downregulated — the same nerve the ancients were stimulating through extended exhalation.", zh: '奥托·洛伊的诺贝尔奖获奖发现——迷走神经传导——提供了神经系统如何被下调的第一个现代机制——古人通过延长呼气就在刺激同一根神经。' },
    'sci.tl4.era': { en: 'Present', zh: '当代' },
    'sci.tl4.title': { en: 'The Convergence', zh: '汇流' },
    'sci.tl4.body': { en: 'Peer-reviewed research now confirms what contemplative traditions always held: deliberate breath patterns directly modulate the autonomic nervous system, HRV, cortisol, and emotional regulation. The bridge was always the exhale.', zh: '经同行评审的研究现已证实冥想传统一直坚持的：刻意的呼吸模式直接调节自主神经系统、HRV、皮质醇和情绪调节。桥梁始终是呼气。' },
    'sci.cta.h2': { en: 'Now that you know <em>why</em> —<br>begin the practice.', zh: '既然你已知道<em>为什么</em>——<br>开始练习吧。' },
    'sci.cta.p': { en: 'Understanding the mechanism is useful. Doing it is transformative. Ten minutes is enough to shift your state.', zh: '理解机制是有用的。实践则是变革性的。十分钟足以改变你的状态。' },
    'sci.cta.link': { en: 'Choose your pattern', zh: '选择你的模式' },

    // ─── Collective (collective.astro) ───
    'col.hero.label': { en: 'The Collective', zh: '社区' },
    'col.hero.h1': { en: 'A weekly letter on<br><em>breath, stillness,</em><br>and living deliberately.', zh: '关于<br><em>呼吸、静谧</em><br>与刻意生活的周信。' },
    'col.hero.body': { en: 'No noise. No streaks. One practice, one piece of ancient wisdom translated for modern life, and one small shift — every week. Written from Bali, read everywhere.', zh: '没有噪音。没有打卡。一个练习、一段为现代生活翻译的古老智慧、一个微小的转变——每周一次。写自巴厘岛，遍布世界。' },
    'col.hero.btn': { en: 'Join the Collective', zh: '加入社区' },
    'col.hero.note': { en: 'Weekly. No spam. Unsubscribe any time.', zh: '每周一次。无垃圾邮件。随时退订。' },
    'col.manifesto.label': { en: 'Why this exists', zh: '为何存在' },
    'col.manifesto.text': { en: 'Most apps want <strong>more of you</strong>. More time, more taps, more data. They measure your streaks and gamify your stillness until even rest feels like a performance.<br><br>This is the opposite. A letter that asks nothing of you except ten minutes and an open breath. Written by someone who moved to Bali, learned to just breathe, and found that almost everything else followed.', zh: '大多数应用都想从你那里获取<strong>更多</strong>。更多时间、更多点击、更多数据。它们衡量你的打卡天数，将你的静心游戏化，直到连休息都像是一场表演。<br><br>这是相反的。一封只要求你十分钟和一次开放呼吸的信。写信的人搬到了巴厘岛，学会了只是呼吸，然后发现几乎一切都随之而来。' },
    'col.manifesto.attr': { en: '— Soft Breathe · Bali, Indonesia', zh: '— Soft Breathe · 印度尼西亚巴厘岛' },
    'col.receive.label': { en: 'What you receive', zh: '你将收到' },
    'col.receive.h2': { en: 'One letter.<br><em>Three things inside.</em>', zh: '一封信。<br><em>内含三样东西。</em>' },
    'col.r1.title': { en: 'The Practice', zh: '练习' },
    'col.r1.body': { en: 'A single breathing technique, explained clearly — what it is, where it comes from, when to use it. Short enough to read in two minutes. Useful enough to return to for weeks.', zh: '一种呼吸技巧，清晰解释——它是什么、来自哪里、何时使用。短到两分钟即可阅读。实用到可以连续练习数周。' },
    'col.r2.title': { en: 'The Science', zh: '科学' },
    'col.r2.body': { en: 'One piece of research or ancient wisdom, translated from the academic or classical into plain language. The mechanism behind why the practice works. Not productivity hacks — real physiology.', zh: '一段研究或古老智慧，从学术或古典语言翻译成通俗语言。练习有效背后的机制。不是效率窍门——而是真正的生理学。' },
    'col.r3.title': { en: 'The Shift', zh: '转变' },
    'col.r3.body': { en: 'A small, concrete suggestion for one change. Not a list. One deliberate shift in how you move, sleep, eat, or simply exist for the week.', zh: '一个小而具体的改变建议。不是清单。一个关于你如何度过这一周——运动、睡眠、饮食或仅仅存在——的刻意转变。' },
    'col.sample.label': { en: 'Read a sample', zh: '阅读示例' },
    'col.sample.h2': { en: 'Issue One<br><em>The exhale that resets everything.</em>', zh: '第一期<br><em>重置一切的那一次呼气。</em>' },

    // ─── Practice (practice.astro) ───
    'prac.label': { en: 'CHOOSE YOUR PRACTICE', zh: '选择你的练习' },
    'prac.relax.name': { en: 'Relax 4–6', zh: '放松 4–6' },
    'prac.relax.rhythm': { en: 'Inhale 4 · Exhale 6', zh: '吸气 4 · 呼气 6' },
    'prac.relax.use': { en: 'Daily reset, stress at work', zh: '日常重置，工作减压' },
    'prac.box.name': { en: 'Box Breathing', zh: '箱式呼吸' },
    'prac.box.rhythm': { en: '4 · Hold 4 · 4 · Hold 4', zh: '4 · 屏息 4 · 4 · 屏息 4' },
    'prac.box.use': { en: 'Focus, before important tasks', zh: '专注，重要任务前' },
    'prac.478.name': { en: '4–7–8 Sleep', zh: '4–7–8 助眠' },
    'prac.478.rhythm': { en: 'Inhale 4 · Hold 7 · Exhale 8', zh: '吸气 4 · 屏息 7 · 呼气 8' },
    'prac.478.use': { en: 'Deep rest, before sleep', zh: '深度休息，睡前' },
    'prac.energise.name': { en: 'Energise 6–2', zh: '提神 6–2' },
    'prac.energise.rhythm': { en: 'Inhale 6 · Exhale 2', zh: '吸气 6 · 呼气 2' },
    'prac.energise.use': { en: 'Morning, afternoon fatigue', zh: '晨间，午后疲劳' },
    'prac.cycles': { en: 'CYCLES', zh: '循环' },
    'prac.pattern': { en: 'Pattern', zh: '模式' },
    'prac.duration': { en: 'Duration', zh: '时长' },
    'prac.begin': { en: 'Begin the practice', zh: '开始练习' },
    'prac.end': { en: 'End session', zh: '结束练习' },
    'prac.complete.title': { en: 'Session <em>complete.</em>', zh: '练习<em>完成。</em>' },
    'prac.complete.body': { en: 'Take a moment in the stillness. Both channels open. The kite at rest. This is sandhyā.', zh: '在静谧中停留片刻。双侧通道打开。风筝安然。这就是三昧。' },
    'prac.complete.btn': { en: 'Begin again', zh: '再来一次' },
    'prac.inhale': { en: 'inhale', zh: '吸气' },
    'prac.exhale': { en: 'exhale', zh: '呼气' },
    'prac.hold': { en: 'hold', zh: '屏息' },
    'prac.begin.label': { en: 'begin', zh: '开始' },
    'prac.complete.label': { en: 'complete', zh: '完成' },
};

export function getLang() {
    return localStorage.getItem('sb-lang') || 'en';
}

export function setLang(lang) {
    localStorage.setItem('sb-lang', lang);
}

export function applyLang(lang) {
    setLang(lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = translations[key];
        if (t && t[lang]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = t[lang];
            } else {
                el.innerHTML = t[lang];
            }
        }
    });
    // Update toggle button text
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.textContent = lang === 'en' ? '中文' : 'EN';
}

export function toggleLang() {
    const current = getLang();
    const next = current === 'en' ? 'zh' : 'en';
    applyLang(next);
}
