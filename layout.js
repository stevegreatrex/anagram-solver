(function (root, factory) {
    const layout = factory();

    if (typeof module === 'object' && module.exports) {
        module.exports = layout;
    } else {
        root.AnagramLayout = layout;
    }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    const buildPerRowCounts = (n, availW, availH) => {
        const pipMap = {
            1: [1],
            2: [1,1],
            3: [1,1,1],
            4: [2,2],
            5: [2,1,2],
            6: [2,2,2],
            7: [2,3,2],
            8: [3,2,3],
            9: [3,3,3],
            10: [3,4,3]
        };
        if (pipMap[n]) return pipMap[n].slice();

        const aspect = availW / availH;
        let rows = Math.round(Math.sqrt(n / aspect));
        rows = Math.max(2, Math.min(6, rows));
        const base = Math.floor(n / rows);
        let remainder = n % rows;
        const perRow = new Array(rows).fill(base);
        let mid = Math.floor(rows / 2);
        let spread = 0;
        while (remainder > 0) {
            const up = mid - spread;
            const down = mid + spread + (rows % 2 === 0 ? 1 : 0);
            if (up >= 0 && remainder > 0) { perRow[up]++; remainder--; }
            if (down < rows && remainder > 0) { perRow[down]++; remainder--; }
            spread++;
        }
        return perRow;
    };

    return { buildPerRowCounts };
}));
