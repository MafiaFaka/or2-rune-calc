const drops = [
    { 
        name: "Poseidon", 
        rate: new Decimal ('1e10'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(212, 51, 40),rgb(194, 171, 43),rgb(43, 189, 194))",
        bonuses: ["x1k Luck", "x60k XP", "x400 Fire", "x20 Plasma", "x4 Rune Bulk"]
    },
    { 
        name: "Celestial", 
        rate: new Decimal('1e11'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(99, 0, 112),rgb(66, 8, 73),rgb(99, 0, 112),rgb(66, 8, 73))",
        bonuses: ["x6k Luck", "x200k XP", "x200 Plasma", "x4 Rune Bulk"]
    },
    { 
        name: "Prismatic Slime", 
        rate: new Decimal('1e15'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(14, 89, 99),rgb(94, 17, 42))",
        bonuses: ["x3 Rune Luck", "x10 Frost"]
    },
    { 
        name: "Absolute Zero", 
        rate: new Decimal('2.5e21'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(68, 86, 134),rgb(98, 110, 143))",
        bonuses: ["x10k Luck", "x5k XP", "x40 Snow", "x40 Frost", "x4 Rune Bulk", "x4 Rune Speed", "x4 Rune Luck"]
    },
    { 
        name: "Eternal Ice", 
        rate: new Decimal('5e25'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(15, 13, 155),rgb(107, 105, 136),rgb(135, 22, 150))",
        bonuses: ["x10k Luck", "x5k XP", "x40 Frost", "x4 Rune Bulk", "x4 Rune Speed"]
    },
    { 
        name: "Crystal", 
        rate: new Decimal('2.1e33'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(189, 125, 42),rgb(250, 173, 73))",
        bonuses: ["x100k Luck", "x00k XP", "x400 Plasma", "x20 Snowflakes", "x4 Rune Bulk", "x6 Rune Speed"]
    },
    { 
        name: "Cosmic Ice", 
        rate: new Decimal('2.5e40'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(164, 84, 211), rgb(57, 16, 80))",
        bonuses: ["x200B Luck", "x200B XP", "x100 Snowflake", "x4 Rune Bulk", "x8 Rune Speed", "x5 Rune Luck"]
    },
    { 
        name: "Genesis Slime", 
        rate: new Decimal('7.5e41'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(86, 172, 206),rgb(103, 58, 128))",
        bonuses: ["x? Luck", "x? XP", "x24k Plasma", "x1k Snowflake", "x10 Rune Speed", "x2.5 Rune Luck"]
    },
    { 
        name: "Hellstorm Core", 
        rate: new Decimal('1.5e43'), 
        type: "Prestigious", 
        color: "linear-gradient(135deg,rgb(255, 217, 0),rgb(240, 82, 19))",
        bonuses: ["x? Luck", "x? XP", "x4k Snowflake", "x2 Rune Luck", "x6 Rune Speed"]
    }
];

let lastDisplayedRPS = new Decimal(0);
let currentRPS = new Decimal(0);
let playerLuck = 1;
let runeClones = 1;

function version() {
    const versionTitle = document.getElementById('versionTitle');
    const versionText = document.getElementById('version');
    const version = 'v1.1';

    versionTitle.textContent = version;
    versionText.textContent = `Update Log | ${version}`;
}

function parseRuneClones() {
    const input = document.getElementById('runeCloneInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        runeClones = parsed;
        localStorage.setItem('savedRuneClones', parsed.toString());
    } else {
        runeClones = new Decimal(1);
    }

    parseRate(); // recalcula RPS with / without clone
}

function parseLuck() {
    const input = document.getElementById('luckInput');
    const parsed = parseRPSInput(input.value);

    if (parsed && parsed.gt(0)) {
        playerLuck = parsed;
        localStorage.setItem('savedLuck', parsed.toString());
    } else {
        playerLuck = new Decimal(1);
    }

    renderDrops();
}

function parseRPSInput(input) {
    if (!input) return null;
    input = input.toLowerCase().replace(/\s/g,'');
    for (const unit of NUMBER_UNITS) {
        if (input.endsWith(unit.suffix.toLowerCase())) {
            const num = new Decimal(input.slice(0, -unit.suffix.length));
            return num.mul(unit.value);
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

        localStorage.setItem('savedRPS', parsed.toString());
    } else {
        parsedEl.textContent = '';
        currentRPS = new Decimal(0);
    }

    renderDrops();
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
    if (num.gte('1e63')) {
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

function animateNumber(el, from, to, duration = 300) {
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const current = from.plus(to.minus(from).mul(progress));

        el.textContent = formatDisplayNumber(current);

        if (progress < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
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
            adjustedRPS = currentRPS.div(runeClones);
            const seconds = adjustedRate.div(adjustedRPS);
            time = formatTime(seconds);

            if (hideInstant && seconds < 1) {
                return;
            }
        }
        
        const bonusesHTML = drop.bonuses.map(bonus => 
            `<span class="bonus-tag">${bonus}</span>`
        ).join('');
        
        dropItem.innerHTML = `        
            <div class="drop-info">
                <h4 style="color: #fff; font-weight: 700;">${drop.name}</h4>
                <div class="drop-rate">${`1 / ${formatDisplayNumber(adjustedRate)}`}</div> <!-- Probabilidad ajustada -->
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
version();