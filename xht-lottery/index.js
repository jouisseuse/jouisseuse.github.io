function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 获取两个数之间的随机数
function getRandom(min, max){
    var num = min + Math.floor(Math.random() * (max - min + 1));
    return num;
}

// 列举可以参加抽奖的座位号（第几区，第几排，第几列）
var obj = {
    // 1楼
    '001': [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
    ],
    '002': [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
    ]
}
// 获取页面元素
var numberElement = document.getElementById('number');
var btnElement = document.getElementById('btn');

// 定义全局变量
var intervalId;  // 用于保存定时器ID
var number = 0;  // 当前数字
var isRolling = false;  // 标记数字是否在滚动中

// 定义滚动数字的函数
function rollNumber() {
    var getAreaRandomIndex = getRandom(0, Object.keys(obj).length - 1);
    // 再在上面得到的区域中再随机获取第几排（索引）
    var getRowsRandomIndex = getRandom(0, obj[Object.keys(obj)[getAreaRandomIndex]].length - 1);
    // 最后在上面得到的第几排中再随机获取第几号（索引）
    var getcolsRandomIndex = getRandom(0, obj[Object.keys(obj)[getAreaRandomIndex]][getRowsRandomIndex].length -1);
    var area = Object.keys(obj)[getAreaRandomIndex];
    // 得到第几排
    var rows = getRowsRandomIndex + 1;
    // 得到第几列
    var cols = obj[Object.keys(obj)[getAreaRandomIndex]][getRowsRandomIndex][getcolsRandomIndex];
    //var row = Math.floor(Math.random() * 10); // 生成 0-9 的随机数字
    //var seat = Math.floor(Math.random() * 10); // 生成 0-9 的随机数字
    numberElement.innerText = area + '-' + rows + '-' + cols; // 更新显示的数字
}

// 按钮点击事件处理函数
function btnClick() {
    if (isRolling) {
        // 如果数字在滚动中，点击按钮暂停滚动
        clearInterval(intervalId);
        isRolling = false;
        document.getElementById('startButton').innerText = '开始';
        //btnElement.textContent = '开始抽奖';
    } else {
        // 如果数字没有在滚动中，点击按钮开始滚动
        intervalId = setInterval(rollNumber, 100); // 每100毫秒滚动一次数字
        isRolling = true;
        document.getElementById('startButton').innerText = '暂停';
        //btnElement.textContent = '暂停抽奖';
    }
}

// 绑定按钮点击事件
btnElement.addEventListener('click', btnClick);

/*
function deepCopy(x){
    return JSON.parse(JSON.stringify(x));
}

function range(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


// locators




var secA_rows = [8, 9];
range(11).forEach(function(i) {
    secA_rows.push(10);
});
secAD_rows = secA_rows.concat([8, 2, 2, 3]);

var secEH_rows = [30, 30 - 1, 30 - 2, 30 - 3];

var secFG_rows = [9, 9, 10, 6];

var secADEFGH = function(_id, rows) {
    var _sum = 0;
    var _i;
    for (_i = 0; _i < rows.length; _i++) {
        if (_id <= _sum + rows[_i]) {
            break;
        }
        _sum += rows[_i];
    }
    var row = _i + 1;
    var col = _id - _sum;
    return {
        row: row,
        col: col,
    }
}
var secAD = function(_id) {
    return secADEFGH(_id, secAD_rows);
}
var secFG = function(_id) {
    return secADEFGH(_id, secFG_rows);
}
var secEH = function(_id) {
    return secADEFGH(_id, secEH_rows);
}
var secBC = function(_id) {
    var row = Math.floor((_id - 1) / 10) + 1;
    var col = (_id - 1) % 10 + 1;
    return {
        row: row,
        col: col,
    }
}


var sections = [{
    sec: 'A',
    locator: secAD,
    n: sum(secAD_rows)
}, {
    sec: 'B',
    locator: secBC,
    n: 18 * 10
}, {
    sec: 'C',
    locator: secBC,
    n: 18 * 10
}, {
    sec: 'D',
    locator: secAD,
    n: sum(secAD_rows)
}]

 {
    sec: 'E',
    locator: secEH,
    n: sum(secEH_rows)
}, {
    sec: 'F',
    locator: secFG,
    n: sum(secFG_rows)
}, {
    sec: 'G',
    locator: secFG,
    n: sum(secFG_rows)
}, {
    sec: 'H',
    locator: secEH,
    n: sum(secEH_rows)
}]

var totalSeats = 0;
for (var i = 0; i < sections.length; i++) {
    totalSeats += sections[i].n;
}

var seat = function(id) {

    if (id <= 0) {
        return;
    }

    var offset = 0;

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var numSeats = section.n;
        if (id <= offset + numSeats) {
            var _id = id - offset;
            var s = section.locator(_id);
            s.sec = section.sec;
            return s;
        }
        offset += numSeats;
    }

}

function renderer(seat) {
    return {
        'A': function(c, r) {
            return {
                x: 37 + c + 2,
                y: r + 3
            }
        },
        'B': function(c, r) {
            return {
                x: 26 + c + 2,
                y: r + 3
            }
        },
        'C': function(c, r) {
            return {
                x: 15 + 10 - c + 3,
                y: r + 3
            }
        },
        'D': function(c, r) {
            return {
                x: 4 + 10 - c + 3,
                y: r + 3
            }
        },
        'E': function(c, r) {
            return {
                x: 51 + r,
                y: c + [null, 0, 1, 2, 2][r]
            }
        },
        'F': function(c, r) {
            return {
                x: 30 + c,
                y: 24 + r
            }
        },
        'G': function(c, r) {
            return {
                x: 21 + 5 - c,
                y: 24 + r
            }
        },
        'H': function(c, r) {
            return {
                x: 5 - r,
                y: c + [null, 0, 1, 2, 2][r]
            }
        },
    }[seat.sec](seat.col, seat.row);
};


function readable(s) {
    //return [s.sec, '区第', s.row, '排第', s.col, '个'].join(' ');
    return [s.row, '排第', s.col, '个'].join(' ');
}

var BOX_WIDTH = 18;

function createDiv(el, id) {
    var d = document.createElement('div');
    d.id = id;
    d.className = 'seat';
    var s = seat(id);
    if ("ABCD".indexOf(s.sec) == -1) {
        d.classList.add('upstairs');
    }
    var r = renderer(s);
    var x = r.x;
    var y = r.y;
    d.style.left = BOX_WIDTH * x + 'px';
    d.style.top = 50 + BOX_WIDTH * y + 'px';
    el.appendChild(d);
}


var parent = document.createElement('div');
for (var i = 1; i <= totalSeats; i++) {
    createDiv(parent, i);
}
document.getElementById('container').appendChild(parent);





var last_id = 0;
var last_neighbours = [];
var flag = false;
var lucky = []

function updateRand() {
    if (last_id && lucky.indexOf(last_id) != -1) {
        document.getElementById(last_id).classList.remove('highlighted');
    };
    if (flag) {
        window.clearInterval(timer);
        timer = 0;
    }
    var id;
    do {
        id = getRandomInt(1,  totalSeats);
    } while (lucky.indexOf(id) != -1);

    lucky.push(id);
    document.getElementById(id).classList.add('highlighted');
    var s = seat(id);
    ['sec', 'col', 'row'].forEach(function(key) {
        document.getElementById(key).innerText = s[key];
    });
    last_id = id;
    if (flag) {
        flag = false;
        findNeighbours(id);
    }
}

function adjacent(s1, s2) {
    s1 = deepCopy(s1);
    s2 = deepCopy(s2);
    if('EH'.indexOf(s1.sec)!=-1){
        s1.col += [null, 0, 1, 2, 2][s1.row];
    }
    if('EH'.indexOf(s2.sec)!=-1){
        s2.col += [null, 0, 1, 2, 2][s2.row];
    }
    function crossSectionAdjacent(s1, s2) {
        return s1.row == s2.row && (
            (s1.sec == 'A' && s2.sec == 'B' && s1.col == 1 && s2.col == 10) ||
            (s1.sec == 'B' && s2.sec == 'C' && s1.col == 1 && s2.col == 1) ||
            (s1.sec == 'C' && s2.sec == 'D' && s1.col == 10 && s2.col == 1)
        )
    }
    return (s1.sec == s2.sec && Math.abs(s1.col - s2.col) + Math.abs(s1.row - s2.row) == 1) || crossSectionAdjacent(s1, s2) || crossSectionAdjacent(s2, s1)
}


function findNeighbours(id) {
    last_neighbours = []
    var s1 = seat(id);
    for (var i = 1; i <= totalSeats; i++) {
        var s2 = seat(i);
        if (id != i && (adjacent(s1, s2) || adjacent(s2, s1))) {
            last_neighbours.push(i);
            document.getElementById(i).classList.add('neighbour');
        }
    }
}

var timer;

document.addEventListener('keyup', function(e) {
    if (e.key != "Enter" && e.key != " ") {
        return;
    }
    if (timer) {
        flag = true;
    } else {
        last_id = 0;
        timer = window.setInterval(updateRand, 50);
    }
});







// tests

// reference: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}



function test() {
    function assert(x, y) {
        if (!isEquivalent(x, y)) {
            console.error(x)
            console.error(y)
            throw x;
        }
    }
    assert(seat(1), {
        'sec': 'A',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 1), {
        'sec': 'B',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 1), {
        'sec': 'C',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 180 + 1), {
        'sec': 'D',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 180 + 142), {
        'sec': 'D',
        'col': 3,
        'row': 17
    });
    assert(seat(142 + 180 + 180 + 142 + 1), {
        'sec': 'E',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 180 + 142 + 114 + 1), {
        'sec': 'F',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 180 + 142 + 114 + 34 + 1), {
        'sec': 'G',
        'col': 1,
        'row': 1
    });
    assert(seat(142 + 180 + 180 + 142 + 114 + 34 + 34 + 1), {
        'sec': 'H',
        'col': 1,
        'row': 1
    });
    console.log('tests pass')
}
*/