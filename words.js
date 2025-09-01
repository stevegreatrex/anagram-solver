// Common English words for anagram solving
// This is a curated list of common words to keep the app lightweight
const WORD_LIST = [
    // 2-letter words
    'am', 'an', 'as', 'at', 'be', 'by', 'do', 'go', 'he', 'if', 'in', 'is', 'it', 'me', 'my', 'no', 'of', 'on', 'or', 'so', 'to', 'up', 'we',
    
    // 3-letter words
    'ace', 'act', 'add', 'age', 'ago', 'aid', 'aim', 'air', 'all', 'and', 'ant', 'any', 'ape', 'are', 'arm', 'art', 'ask', 'ate', 'bad', 'bag', 'bar', 'bat', 'bay', 'bed', 'bee', 'bet', 'big', 'bit', 'box', 'boy', 'bug', 'bus', 'but', 'buy', 'can', 'car', 'cat', 'cow', 'cry', 'cup', 'cut', 'day', 'die', 'dig', 'dog', 'dot', 'dry', 'ear', 'eat', 'egg', 'end', 'eye', 'far', 'fat', 'few', 'fix', 'fly', 'for', 'fox', 'fun', 'gas', 'get', 'got', 'gun', 'had', 'has', 'hat', 'her', 'hid', 'him', 'his', 'hit', 'hot', 'how', 'ice', 'ill', 'its', 'job', 'key', 'kid', 'lay', 'leg', 'let', 'lie', 'log', 'lot', 'low', 'mad', 'man', 'map', 'may', 'men', 'met', 'mix', 'mom', 'mud', 'net', 'new', 'not', 'now', 'odd', 'off', 'old', 'one', 'our', 'out', 'own', 'pan', 'pay', 'pen', 'pet', 'pie', 'pig', 'pin', 'pop', 'pot', 'put', 'ran', 'rat', 'red', 'rid', 'row', 'rub', 'run', 'sad', 'sat', 'saw', 'say', 'sea', 'see', 'set', 'she', 'shy', 'sit', 'six', 'sky', 'sun', 'tea', 'ten', 'the', 'tie', 'tip', 'too', 'top', 'try', 'two', 'use', 'van', 'war', 'was', 'way', 'who', 'why', 'win', 'won', 'yes', 'yet', 'you', 'zip',
    
    // 4-letter words
    'able', 'back', 'ball', 'bear', 'beat', 'been', 'bell', 'best', 'bird', 'blow', 'blue', 'boat', 'body', 'bone', 'book', 'born', 'both', 'bowl', 'burn', 'busy', 'call', 'came', 'care', 'case', 'cast', 'chat', 'chip', 'city', 'clap', 'clay', 'clip', 'club', 'coal', 'coat', 'coin', 'cold', 'come', 'cook', 'cool', 'copy', 'corn', 'cost', 'crew', 'crop', 'cube', 'cure', 'cute', 'dark', 'date', 'dawn', 'dead', 'deal', 'dear', 'deep', 'desk', 'dial', 'dice', 'dirt', 'dish', 'dive', 'dock', 'does', 'done', 'door', 'draw', 'drew', 'drop', 'drum', 'duck', 'dull', 'dust', 'duty', 'each', 'earl', 'earn', 'east', 'easy', 'echo', 'edge', 'else', 'emit', 'even', 'ever', 'evil', 'exit', 'face', 'fact', 'fail', 'fair', 'fall', 'farm', 'fast', 'fate', 'fear', 'feed', 'feel', 'feet', 'fell', 'felt', 'file', 'fill', 'find', 'fine', 'fire', 'fish', 'fist', 'five', 'flag', 'flat', 'flew', 'flip', 'flow', 'fold', 'food', 'foot', 'form', 'fort', 'four', 'free', 'from', 'fuel', 'full', 'fund', 'gain', 'game', 'gate', 'gave', 'gear', 'gift', 'girl', 'give', 'glad', 'glow', 'goal', 'goat', 'goes', 'gold', 'golf', 'gone', 'good', 'grab', 'gray', 'grew', 'grow', 'gulf', 'hair', 'half', 'hall', 'hand', 'hang', 'hard', 'harm', 'hate', 'have', 'head', 'hear', 'heat', 'held', 'help', 'here', 'hide', 'high', 'hill', 'hint', 'hire', 'hold', 'hole', 'holy', 'home', 'hood', 'hook', 'hope', 'horn', 'host', 'hour', 'hunt', 'hurt', 'idea', 'inch', 'into', 'iron', 'item', 'join', 'joke', 'jump', 'just', 'keep', 'kept', 'kick', 'kill', 'kind', 'king', 'knew', 'know', 'lack', 'lady', 'laid', 'lake', 'land', 'lane', 'last', 'late', 'lazy', 'lead', 'leaf', 'lean', 'leap', 'left', 'lens', 'less', 'liar', 'lick', 'life', 'lift', 'like', 'line', 'link', 'list', 'live', 'load', 'loan', 'lock', 'lone', 'long', 'look', 'loop', 'lord', 'lose', 'loss', 'lost', 'loud', 'love', 'luck', 'lung', 'made', 'mail', 'main', 'make', 'male', 'mall', 'many', 'mark', 'mars', 'mass', 'math', 'maze', 'meal', 'mean', 'meat', 'meet', 'melt', 'memo', 'menu', 'mess', 'mice', 'mile', 'milk', 'mind', 'mine', 'mint', 'miss', 'mist', 'mode', 'mood', 'moon', 'more', 'most', 'move', 'much', 'myth', 'nail', 'name', 'navy', 'near', 'neck', 'need', 'nest', 'news', 'next', 'nice', 'nine', 'node', 'none', 'noon', 'norm', 'nose', 'note', 'oath', 'obey', 'odds', 'once', 'only', 'open', 'oral', 'oval', 'over', 'pace', 'pack', 'page', 'paid', 'pain', 'pair', 'palm', 'park', 'part', 'pass', 'past', 'path', 'peak', 'pick', 'pile', 'pink', 'pipe', 'plan', 'play', 'plot', 'plug', 'plus', 'poem', 'poet', 'pole', 'poll', 'pool', 'poor', 'port', 'post', 'pour', 'prey', 'pull', 'pump', 'pure', 'push', 'quiz', 'race', 'rain', 'rank', 'rare', 'rate', 'read', 'real', 'rear', 'rely', 'rent', 'rest', 'rich', 'ride', 'ring', 'rise', 'risk', 'road', 'rock', 'role', 'roll', 'room', 'root', 'rope', 'rose', 'rude', 'rule', 'rush', 'rust', 'safe', 'said', 'sail', 'sake', 'sale', 'salt', 'same', 'sand', 'save', 'seal', 'seat', 'seed', 'seek', 'seem', 'seen', 'self', 'sell', 'send', 'sent', 'ship', 'shoe', 'shop', 'shot', 'show', 'shut', 'sick', 'side', 'sign', 'silk', 'sing', 'sink', 'site', 'size', 'skin', 'skip', 'slip', 'slow', 'snap', 'snow', 'soap', 'sock', 'soft', 'soil', 'sold', 'sole', 'some', 'song', 'soon', 'sort', 'soul', 'soup', 'sour', 'spin', 'spot', 'star', 'stay', 'step', 'stop', 'such', 'suit', 'sure', 'swim', 'take', 'tale', 'talk', 'tall', 'tank', 'tape', 'task', 'team', 'tear', 'tell', 'tent', 'term', 'test', 'text', 'than', 'that', 'them', 'then', 'they', 'thin', 'this', 'thus', 'tide', 'tile', 'time', 'tiny', 'tire', 'told', 'toll', 'tone', 'took', 'tool', 'torn', 'town', 'tree', 'trim', 'trip', 'true', 'tube', 'tune', 'turn', 'twin', 'type', 'unit', 'upon', 'used', 'user', 'vary', 'vast', 'verb', 'very', 'view', 'vote', 'wage', 'wait', 'wake', 'walk', 'wall', 'want', 'ward', 'warm', 'warn', 'wash', 'wave', 'ways', 'weak', 'wear', 'week', 'well', 'went', 'were', 'west', 'what', 'when', 'whip', 'wide', 'wife', 'wild', 'will', 'wind', 'wine', 'wing', 'wire', 'wise', 'wish', 'with', 'wolf', 'wood', 'wool', 'word', 'wore', 'work', 'worn', 'yard', 'year', 'your', 'zero', 'zone',
    
    // 5-letter words and 6-letter words
    'about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt', 'adult', 'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album', 'alert', 'alien', 'align', 'alike', 'alive', 'allow', 'alone', 'along', 'alter', 'amber', 'amend', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply', 'arena', 'argue', 'arise', 'array', 'arrow', 'aside', 'asset', 'avoid', 'awake', 'award', 'aware', 'badly', 'baker', 'bases', 'basic', 'batch', 'beach', 'began', 'begin', 'being', 'below', 'bench', 'billy', 'birth', 'black', 'blame', 'blank', 'blast', 'blind', 'block', 'blood', 'board', 'boast', 'bones', 'boost', 'booth', 'bound', 'brain', 'brand', 'brass', 'brave', 'bread', 'break', 'breed', 'brief', 'bring', 'broad', 'broke', 'brown', 'brush', 'build', 'built', 'burst', 'buyer', 'cable', 'cache', 'cake', 'canoe', 'cards', 'cargo', 'carry', 'carve', 'catch', 'cause', 'chain', 'chair', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'china', 'chose', 'civil', 'claim', 'class', 'clean', 'clear', 'click', 'climb', 'clock', 'close', 'cloud', 'clown', 'clubs', 'coach', 'coast', 'could', 'count', 'court', 'cover', 'craft', 'crash', 'crazy', 'cream', 'crime', 'cross', 'crowd', 'crown', 'crude', 'curve', 'cycle', 'daily', 'dance', 'dated', 'dealt', 'death', 'debut', 'delay', 'depth', 'doing', 'doubt', 'dozen', 'draft', 'drama', 'drank', 'dream', 'dress', 'drill', 'drink', 'drive', 'drove', 'dying', 'eager', 'early', 'earth', 'eight', 'elite', 'empty', 'enemy', 'enjoy', 'enlist', 'enter', 'entry', 'equal', 'error', 'event', 'every', 'exact', 'exist', 'extra', 'faith', 'false', 'fault', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'fixed', 'flash', 'fleet', 'floor', 'fluid', 'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame', 'frank', 'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny', 'giant', 'given', 'glass', 'globe', 'going', 'grace', 'grade', 'grand', 'grant', 'grass', 'grave', 'great', 'green', 'gross', 'group', 'grown', 'guard', 'guess', 'guest', 'guide', 'happy', 'harry', 'heart', 'heavy', 'henry', 'horse', 'hotel', 'house', 'human', 'ideal', 'image', 'index', 'inlets', 'inner', 'input', 'issue', 'japan', 'jimmy', 'joint', 'jones', 'judge', 'known', 'label', 'large', 'laser', 'later', 'laugh', 'layer', 'learn', 'lease', 'least', 'leave', 'legal', 'level', 'lewis', 'light', 'limit', 'links', 'listen', 'lives', 'local', 'loose', 'lower', 'lucky', 'lunch', 'lying', 'magic', 'major', 'maker', 'march', 'maria', 'match', 'maybe', 'mayor', 'meant', 'media', 'metal', 'might', 'minor', 'minus', 'mixed', 'model', 'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'moved', 'movie', 'music', 'needs', 'never', 'newly', 'night', 'noise', 'north', 'noted', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often', 'order', 'other', 'ought', 'paint', 'panel', 'paper', 'party', 'peace', 'peter', 'phase', 'phone', 'photo', 'piano', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant', 'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior', 'prize', 'proof', 'proud', 'prove', 'queen', 'quick', 'quiet', 'quite', 'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'ready', 'realm', 'rebel', 'refer', 'relax', 'repay', 'reply', 'right', 'rigid', 'rival', 'river', 'robin', 'roger', 'roman', 'rough', 'round', 'route', 'royal', 'rural', 'scale', 'scene', 'scope', 'score', 'sense', 'serve', 'setup', 'seven', 'shall', 'shape', 'share', 'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock', 'shoot', 'short', 'shown', 'sides', 'sight', 'silent', 'simon', 'since', 'sixth', 'sixty', 'sized', 'skill', 'sleep', 'slide', 'small', 'smart', 'smile', 'smith', 'smoke', 'snake', 'snow', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spend', 'spent', 'split', 'spoke', 'sport', 'staff', 'stage', 'stake', 'stand', 'start', 'state', 'steam', 'steel', 'steep', 'steer', 'steve', 'stick', 'still', 'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet', 'swift', 'swing', 'swiss', 'table', 'taken', 'taste', 'taxes', 'teach', 'teeth', 'terry', 'texas', 'thank', 'theft', 'their', 'theme', 'there', 'these', 'thick', 'thing', 'think', 'third', 'those', 'three', 'threw', 'throw', 'thumb', 'tiger', 'tight', 'timer', 'times', 'tired', 'title', 'today', 'token', 'topic', 'total', 'touch', 'tough', 'tower', 'track', 'trade', 'train', 'treat', 'trend', 'trial', 'tribe', 'trick', 'tried', 'tries', 'truly', 'trunk', 'trust', 'truth', 'twice', 'twist', 'tyler', 'uncle', 'under', 'undue', 'union', 'unity', 'until', 'upper', 'upset', 'urban', 'usage', 'usual', 'valid', 'value', 'video', 'virus', 'visit', 'vital', 'vocal', 'voice', 'waste', 'watch', 'water', 'waves', 'ways', 'weird', 'welcome', 'wheel', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'world', 'worry', 'worse', 'worst', 'worth', 'would', 'write', 'wrong', 'wrote', 'young', 'youth'
];

// Function to find anagrams from given letters
function findAnagrams(inputLetters) {
    const letters = inputLetters.toLowerCase();
    const letterCount = {};
    
    // Count available letters
    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    
    const results = [];
    
    // Check each word in our dictionary
    for (const word of WORD_LIST) {
        if (canMakeWord(word, letterCount)) {
            results.push(word);
        }
    }
    
    // Sort by length (longer words first), then alphabetically
    results.sort((a, b) => b.length - a.length || a.localeCompare(b));
    
    return results;
}

// Check if a word can be made from available letters
function canMakeWord(word, availableLetters) {
    const wordLetterCount = {};
    
    // Count letters needed for the word
    for (const letter of word.toLowerCase()) {
        wordLetterCount[letter] = (wordLetterCount[letter] || 0) + 1;
    }
    
    // Check if we have enough of each letter
    for (const [letter, needed] of Object.entries(wordLetterCount)) {
        if ((availableLetters[letter] || 0) < needed) {
            return false;
        }
    }
    
    return true;
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { findAnagrams, WORD_LIST };
} else {
    window.findAnagrams = findAnagrams;
    window.WORD_LIST = WORD_LIST;
}