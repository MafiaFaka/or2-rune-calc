const drops = [
    {name: "Poseidon", 
        rate: new Decimal ('1e10'), //10B
        type: "Prestigious",
        rune: "Water Rune",
        color: "linear-gradient(135deg,rgb(212, 51, 40),rgb(194, 171, 43),rgb(43, 189, 194))",
        bonuses: ["x2k Luck", "x120k XP", "x800 Fire", "x40 Plasma", "x8 Rune Bulk"]
    },
    {name: "Celestial", 
        rate: new Decimal('1e11'), //100B
        type: "Prestigious", 
        rune: "Plasma Rune",
        color: "linear-gradient(135deg,rgb(99, 0, 112),rgb(66, 8, 73),rgb(99, 0, 112),rgb(66, 8, 73))",
        bonuses: ["x12k Luck", "x400k XP", "x400 Plasma", "x8 Rune Bulk"]
    },
    {name: "Prismatic Slime", 
        rate: new Decimal('1e15'), //1Qd
        type: "Prestigious", 
        rune: "Slime Rune",
        color: "linear-gradient(135deg,rgb(14, 89, 99),rgb(94, 17, 42))",
        bonuses: ["x6 Rune Luck", "x20 Frost"]
    },
    {name: "Absolute Zero", 
        rate: new Decimal('2.5e21'), //2.5Sx
        type: "Prestigious", 
        rune: "Snow Rune",
        color: "linear-gradient(135deg,rgb(68, 86, 134),rgb(98, 110, 143))",
        bonuses: ["x20k Luck", "x10k XP", "x80 Snow", "x80 Frost", "x8 Rune Bulk", "x8 Rune Speed", "x8 Rune Luck"]
    },
    {name: "Eternal Ice", 
        rate: new Decimal('5e25'), //50Sp
        type: "Prestigious", 
        rune: "Frost Rune",
        color: "linear-gradient(135deg,rgb(15, 13, 155),rgb(107, 105, 136),rgb(135, 22, 150))",
        bonuses: ["x20k Luck", "x10k XP", "x80 Frost", "x8 Rune Bulk", "x8 Rune Speed"]
    },
    {name: "Crystal", 
        rate: new Decimal('2.1e33'), //2.1De
        type: "Prestigious", 
        rune: "Snowflakes Rune",
        color: "linear-gradient(135deg,rgb(189, 125, 42),rgb(250, 173, 73))",
        bonuses: ["x200k Luck", "x200k XP", "x800 Plasma", "x40 Snowflakes", "x8 Rune Bulk", "x12 Rune Speed"]
    },
    {name: "Cosmic Ice", 
        rate: new Decimal('2.5e40'), //25DDe
        type: "Prestigious", 
        rune: "Snowflakes Rune",
        color: "linear-gradient(135deg,rgb(164, 84, 211), rgb(57, 16, 80))",
        bonuses: ["x400B Luck", "x400B XP", "x200 Snowflake", "x8 Rune Bulk", "x16 Rune Speed", "x10 Rune Luck"]
    },
    {name: "Genesis Slime", 
        rate: new Decimal('7.5e41'), //750DDe
        type: "Prestigious", 
        rune: "Slime Rune",
        color: "linear-gradient(135deg,rgb(86, 172, 206),rgb(103, 58, 128))",
        bonuses: ["x4T Luck", "x4T XP", "x48k Plasma", "x2k Snowflake", "x20 Rune Speed", "x5 Rune Luck"]
    },
    {name: "Hellstorm Core", 
        rate: new Decimal('1.5e43'), //15TDe
        type: "Prestigious", 
        rune: "Fire Rune",
        color: "linear-gradient(135deg,rgb(255, 217, 0),rgb(240, 82, 19))",
        bonuses: ["x400T Luck", "x800T XP", "x8k Snowflake", "x4 Rune Luck", "x12 Rune Speed"]
    },
    {name: "Stardust Essence", 
        rate: new Decimal('5e36'), //5UDe
        type: "Prestigious", 
        rune: "Stardust Rune",
        color: "linear-gradient(135deg,rgb(192, 185, 160),rgb(79, 133, 108))",
        bonuses: ["x32 Stardust", "x20B Luck", "x8 Comets"]
    },
    {name: "Stardust Remnant", 
        rate: new Decimal('1e40'), //10DDe
        type: "Prestigious", 
        rune: "Stardust Rune",
        color: "linear-gradient(135deg,rgb(68, 165, 38)rgb(195, 103, 223)))",
        bonuses: ["x4B Luck", "x400Qd XP", "x20 Stardust", "x20 Comets"]
    },
    {name: "Cataclysm Shard", 
        rate: new Decimal('1e63'), //1Vt
        type: "Prestigious", 
        rune: "Meteors Rune",
        color: "linear-gradient(135deg,rgb(0, 132, 255),rgb(0, 132, 255))",
        bonuses: ["x5 Singularity", "x4No Luck"]
    },
    {name: "Extinction Core", 
        rate: new Decimal('1e72'), //1TVt
        type: "Prestigious", 
        rune: "Comets Rune",
        color: "linear-gradient(135deg,rgb(173, 173, 173),rgb(195, 164, 204))",
        bonuses: ["x40 Comets", "x5k Luck", "x40 Meteors", "x200 Stardust"]
    },
    {name: "Astral Flux",
        rate: new Decimal('2.5e83'), //250SxVt
        type: "Prestigious", 
        rune: "Comets Rune",
        color: "linear-gradient(-135deg,rgb(141, 76, 226),rgb(188, 158, 228))",
        bonuses: ["x? Luck", "x12 Rune Bulk", "x12 Rune Speed", "x12 Rune Luck"]
    },
    {name: "Cosmic Ember", 
        rate: new Decimal('2.5e83'), //250SxVt
        type: "Prestigious", 
        rune: "Meteors Rune",
        color: "linear-gradient(180deg,rgb(163, 50, 255),rgb(81, 33, 255))",
        bonuses: ["x60 Meteors", "x60 Singularity", "x? Luck"]
    }
];

const eventDrops = [
    {name: "1M Noob", 
        rate: new Decimal('1'), //1
        type: "Basic",
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(255, 139, 255),rgb(255, 228, 72))",
        bonuses: ["x80 Slime", "x40 Fire"]
    },
    {name: "1M Rookie", 
        rate: new Decimal('2.5e3'), //2.5k
        type: "Basic",
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(85, 215, 255),rgb(59, 165, 236))",
        bonuses: ["x160 Fire", "x36.8 Rune Bulk", "x33.6 Rune Luck"]
    },
    {name: "1M Skilled", 
        rate: new Decimal('2e5'), //200k
        type: "Basic",
        rune: "1M Rune",
        color: "linear-gradient(135deg,rgb(110, 214, 206))",
        bonuses: ["x3.2T Luck", "x96 Comets", "x38.4 Snow", "x38.4 Rune Bulk", "x33.28 Rune Luck"]
    },
    {name: "1M Expert", 
        rate: new Decimal ('2e7'), //20M
        type: "Rare",
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(192, 13, 0),rgb(255, 0, 106),rgb(206, 45, 5))",
        bonuses: ["x160T Luck", "x20.8 Plasma", "x19.2 Frost", "x16.4 Rune Bulk", "x16.4 Rune Luck"]
    },
    {name: "1M Master", 
        rate: new Decimal('1.5e10'), //15B
        type: "Secret",
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(203, 141, 223),rgb(209, 163, 224))",
        bonuses: ["x5 Stardust", "x5 Meteors", "x5.2 Snowflakes", "x4.2 Rune Bulk", "x4.2 Rune Luck"]
    },
    {name: "1M Elite", 
        rate: new Decimal('1e12'), //1T
        type: "Prestigious", 
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(0, 148, 247),rgb(0, 217, 255),rgb(22, 127, 197))",
        bonuses: ["x4M Luck", "x4.8 Meteors", "x4.24 Rune Bulk", "x4.32 Rune Luck"]
    },
    {name: "1M Mythic", 
        rate: new Decimal('5e13'), //50T
        type: "Prestigious", 
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(255, 238, 0),rgb(226, 110, 2))",
        bonuses: ["x400M Luck", "x4.4 Stardust", "x4.8 Comets", "x4.52 Rune Speed", "x4.52 Rune Luck"]
    },
    {name: "1M God", 
        rate: new Decimal('1e15'), //1Qd
        type: "Prestigious", 
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(216, 193, 230),rgb(235, 223, 173),rgb(216, 193, 230))",
        bonuses: ["x4Qd Luck", "x5 Comets", "x4.8 Stardust", "x4.6 Rune Bulk", "x4.6 Rune Speed", "x1.52 Passive Speed"]
    },
    {name: "1M Absolute", 
        rate: new Decimal('9e17'), //900Qd
        type: "Prestigious", 
        rune: "1M Rune",
        color: "linear-gradient(90deg,rgb(212, 51, 40),rgb(194, 171, 43),rgb(43, 189, 194))",
        bonuses: ["x? Luck", "x8 Singularity", "x8 Meteors", "x6.8 Rune Bulk", "x6.8 Rune Luck", "x2 Passive Speed"]
    }
];

let lastDisplayedRPS = new Decimal(0);
let currentRPS = new Decimal(0);
let playerLuck = 1;
let runeClones = 1;
let playerEventLuck = 1;
let eventRuneClones = 1;
let version_number = 'v1.1.4';

function version() {
    const versionTitle = document.getElementById('versionTitle');
    const versionText = document.getElementById('version');

    versionTitle.textContent = version_number;
    versionText.textContent = `Update Log | ${version_number}`;
}

function parseEventRuneClones() {
    const eventInput = document.getElementById('eventRuneCloneInput');
    const eventParsed = parseRPSInput(eventInput.value);

    if (eventParsed && eventParsed.gt(0)) {
        eventRuneClones = eventParsed;
    } else {
        eventRuneClones = new Decimal(1);
    }

    parseEventRate(); // recalcula RPS with / without clone
}

function parseRuneClones() {
    const input = document.getElementById('runeCloneInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        runeClones = parsed;
    } else {
        runeClones = new Decimal(1);
    }

    parseRate(); // recalcula RPS with / without clone
}

function parseEventLuck() {
    const eventInput = document.getElementById('eventLuckInput');
    const eventParsed = parseRPSInput(eventInput.value);

    if (eventParsed && eventParsed.gt(0)) {
        playerEventLuck = eventParsed;
    } else {
        playerEventLuck = new Decimal(1);
    }

    renderEventDrops();
}

function parseLuck() {
    const input = document.getElementById('luckInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        playerLuck = parsed;
    } else {
        playerLuck = new Decimal(1);
    }
   
    renderDrops();
}

function parseRPSInput(input) {
    if (!input) return null;

    input = input.toLowerCase().replace(/\s/g, '');

    const unitsSorted = [...NUMBER_UNITS].sort(
        (a, b) => b.suffix.length - a.suffix.length
    );

    for (const unit of unitsSorted) {
        if (input.endsWith(unit.suffix.toLowerCase())) {
            const numberPart = input.slice(0, -unit.suffix.length);
            if (numberPart === '' || numberPart === '-') return null;

            return new Decimal(numberPart).mul(unit.value);
        }
    }

    return new Decimal(input);
}

function parseRate() {
    const input = document.getElementById('rateInput');
    const parsedEl = document.getElementById('parsedRate');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        currentRPS = parsed;

        const rpsWithClone = currentRPS;
        const rpsWithoutClone = currentRPS.div(runeClones);

        parsedEl.innerHTML = `
            <div><strong>RPS with Rune Clone:</strong> ${formatDisplayNumber(rpsWithClone)}</div>
            <div><strong>RPS without Rune Clone:</strong> ${formatDisplayNumber(rpsWithoutClone)}</div>
        `;
    } else {
        parsedEl.textContent = '';
        currentRPS = new Decimal(0);
    }

    renderDrops();
    renderEventDrops();

    if (parsed.gte('1e100')) {
        return formatScientificDecimal(num);
    }
}

function formatTime(seconds) {
    if (seconds instanceof Decimal) {
        if (!seconds.isFinite()) return 'Infinite';
        seconds = seconds.toNumber();
    }
    const timeUnit = document.getElementById('timeUnitSelect').value;

    if (isNaN(seconds) || !isFinite(seconds)) return 'Infinite';

    // Check if under 0.5 seconds in auto format
    if (timeUnit === 'auto' && seconds < 0.5) {
        return 'Instant';
    }
    
    // Check if over 10 years (315,360,000 seconds)
    if (timeUnit === 'auto' && seconds > 315360000) {
        let message;

        if (seconds > 3.1536e11) { // More than 10k years
            message = "Crazy... That's beyond comprehension!";
        } else if (seconds > 3.154e9) { // More than 100 years
            message = "A century or more... Forget it!";
        } else if (seconds > 3.154e7) { // More than 10 years
            message = "You would need a few years...";
        } else {
            message = "A long time... but possible.";
        }

        return message;
    }

    // Continue with the rest of your time formatting
    if (timeUnit === 'seconds') {
        return `${seconds.toFixed(2)} seconds`;
    } else if (timeUnit === 'minutes') {
        return `${(seconds / 60).toFixed(2)} minutes`;
    } else if (timeUnit === 'hours') {
        return `${(seconds / 3600).toFixed(2)} hours`;
    }

    // Auto format with proper units
    if (seconds < 1) {
        return `${(seconds * 1000).toFixed(0)} ms`;
    }
    if (seconds < 60) {
        return `${seconds.toFixed(1)} seconds`;
    }
    if (seconds < 3600) {
        // Show minutes and seconds
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}m ${secs}s`;
    }
    if (seconds < 86400) {
        // Show hours and minutes
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${mins}m`;
    }
    if (seconds < 604800) {
        // Show days and hours
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        return `${days}d ${hours}h`;
    }
    if (seconds < 2592000) {
        // Show weeks and days
        const weeks = Math.floor(seconds / 604800);
        const days = Math.floor((seconds % 604800) / 86400);
        return `${weeks}w ${days}d`;
    }
    if (seconds < 31536000) {
        // Show months
        const months = (seconds / 2592000).toFixed(1);
        return `${months} months`;
    }
    // Show years
    const years = (seconds / 31536000).toFixed(1);
    return `${years} years`;
}

function formatIdleDecimal(dec) {
    for (const unit of NUMBER_UNITS) {
        if (dec.gte(unit.value)) {
            const v = dec.div(unit.value);
            return v.toFixed(v.lt(10) ? 2 : 1) + unit.suffix;
        }
    }
    return dec.toFixed(0);
}

function formatScientificDecimal(dec) {
    const exp = dec.logarithm(10).floor();
    const mantissa = dec.div(new Decimal(10).pow(exp));
    return mantissa.toFixed(2) + 'e' + exp.toString();
}

function formatDisplayNumber(num) {
    if (!(num instanceof Decimal)) num = new Decimal(num);
    if (!num.isFinite()) return '∞';

    // Hybrid notation
    if (num.gte('1e100')) {
        return formatScientificDecimal(num);
    }

    return formatIdleDecimal(num);
}

function formatFullNumber(num) {
    return num.toLocaleString('en-US');
}

function normalizeRateInput() {
    const input = document.getElementById('rateInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.isFinite() && parsed.gt(0)) {
        input.value = formatIdleDecimal(parsed);
    }

    if (parsed.gte('1e100')) {
        return formatScientificDecimal(num);
    }
}

function normalizeRuneCloneInput() {
    const input = document.getElementById('runeCloneInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.isFinite() && parsed.gt(0)) {
        input.value = formatIdleDecimal(parsed);
    }
}

function normalizeLuckInput() {
    const input = document.getElementById('luckInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.isFinite() && parsed.gt(0)) {
        input.value = formatIdleDecimal(parsed);
    }
}

function renderDrops() {
    const dropList = document.getElementById('dropList');
    const filterText = document.getElementById('filterInput').value.toLowerCase();
    const hideInstant = document.getElementById('hideInstant').checked;
    const sortType = document.getElementById('sortSelect').value;
    
    let filteredDrops = drops.filter(drop => 
        drop.name.toLowerCase().includes(filterText)
    );

    // Sort drops
    if (sortType === 'recommended') {
        const order = ['Eternal', 'Oblivion', 'Umbralith', 'Nuclear', 'Aeros'];
        filteredDrops.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
    } else if (sortType === 'easiest') {
        filteredDrops.sort((a, b) => a.rate - b.rate);
    } else if (sortType === 'hardest') {
        filteredDrops.sort((a, b) => b.rate - a.rate);
    }

    dropList.innerHTML = '';
    
    filteredDrops.forEach(drop => {
        const dropItem = document.createElement('div');
        dropItem.className = 'drop-item';
        
        let time = 'Set RPS above';
        let adjustedRate = drop.rate;
        
        if (currentRPS.gt(0)) {
            adjustedRate = drop.rate.div(playerLuck);
            const adjustedRPS = currentRPS.div(runeClones);
            const seconds = adjustedRate.div(adjustedRPS);
            const isInstant = seconds.lt(1);
            time = formatTime(seconds);

            if (hideInstant && isInstant) {
                return;
            }
        }
        
        const bonusesHTML = drop.bonuses.map(bonus => 
            `<span class="bonus-tag">${bonus}</span>`
        ).join('');
        
        dropItem.innerHTML = `        
            <div class="drop-info">
                <h4 style="color: #fff; font-weight: 700;">${drop.name}</h4>
                <h4 style="color: #fff; font-weight: 700; font-size: 18px;">${drop.rune}</h4>
                <div class="drop-rate">${`1 / ${formatDisplayNumber(adjustedRate)}`}</div>
                <div class="bonuses-list">${bonusesHTML}</div>
            </div>
            <div class="time-estimate">${time}</div>
        `;
        
        dropItem.style.setProperty('background', drop.color);
        dropItem.style.setProperty('border-color', 'rgba(255, 255, 255, 0.2)');
        
        dropList.appendChild(dropItem);
    });

    if (filteredDrops.length === 0) {
        dropList.innerHTML = '<p style="text-align: center; color: #9ca3af; padding: 40px;">No runes found</p>';
    }
}

function renderEventDrops() {
    const eventDropList = document.getElementById('eventDropList');
    const filterText = document.getElementById('filterInput').value.toLowerCase();
    const hideInstant = document.getElementById('hideInstant').checked;
    const sortType = document.getElementById('sortSelect').value;

    let filteredEventDrops = eventDrops.filter(eventDrop => 
        eventDrop.name.toLowerCase().includes(filterText)
    );

    // Sort drops
    if (sortType === 'recommended') {
        const order = ['Eternal', 'Oblivion', 'Umbralith', 'Nuclear', 'Aeros'];
        filteredEventDrops.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
    } else if (sortType === 'easiest') {
        filteredEventDrops.sort((a, b) => a.rate - b.rate);
    } else if (sortType === 'hardest') {
        filteredEventDrops.sort((a, b) => b.rate - a.rate);
    }

    eventDropList.innerHTML = '';

    filteredEventDrops.forEach(eventDrop => {
        const dropItem = document.createElement('div');
        dropItem.className = 'drop-item';
        
        let time = 'Set RPS above';
        let adjustedRate = eventDrop.rate;

        if (currentRPS.gt(0)) {
            adjustedRate = eventDrop.rate.div(playerLuck);
            const adjustedRPS = currentRPS.div(runeClones);
            const seconds = adjustedRate.div(adjustedRPS);
            const isInstant = seconds.lt(1);
            time = formatTime(seconds);

            if (hideInstant && isInstant) {
                return;
            }
        }

        const bonusesHTML = eventDrop.bonuses.map(bonus =>
            `<span class="bonus-tag">${bonus}</span>`
        ).join('');
        
        dropItem.innerHTML = `        
            <div class="drop-info">
                <h4 style="color: #fff; font-weight: 700;">${eventDrop.name}</h4>
                <h4 style="color: #fff; font-weight: 700; font-size: 18px;">${eventDrop.rune}</h4>
                <div class="drop-rate">${`1 / ${formatDisplayNumber(adjustedRate)}`}</div>
                <div class="bonuses-list">${bonusesHTML}</div>
            </div>
            <div class="time-estimate">${time}</div>
        `;

        dropItem.style.setProperty('background', eventDrop.color);
        dropItem.style.setProperty('border-color', 'rgba(255, 255, 255, 0.2)');

        eventDropList.appendChild(dropItem);
    });

    if (filteredEventDrops.length === 0) {
        eventDropList.innerHTML = '<p style="text-align: center; color: #9ca3af; padding: 40px;">No runes found</p>';
    }
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName + '-tab').style.display = 'block';
    event.target.classList.add('active');
}

// Initialize
renderDrops();
renderEventDrops();
version();