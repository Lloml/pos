function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00,
            num:0
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00,
            num: 0
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            num: 0
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00,
            num: 0
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00,
            num: 0
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50,
            num: 0
        }
    ];
}
inputs = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
];
module.exports = function main() {
    console.log(printInventory(inputs));
    return 'Hello World!';
};
function printInventory(inputs){
    let item = loadAllItems();
    let result = '';
    inputs.forEach(function(k,i,arr){
        if (k.slice(-2, -1) == '-'){
            let h = Number(k.slice(-3,-2));
            item[h].num += Number(k.slice(-1));
            console.log(item[h])
        }else{
            let h = Number(k.slice(-1));
            item[h].num ++;
            console.log(item[h])
        }
    });
    result = 
        '***<没钱赚商店>购物清单***\n' +
        '名称：' + item[1].name + '，数量：' + item[1].num + item[1].unit + '，单价：' + item[1].price.toFixed(2) + '(元)，小计：' + ((item[1].num-1) * item[1].price).toFixed(2)+'(元)\n' +
        '名称：' + item[3].name + '，数量：' + item[3].num + item[3].unit + '，单价：' + item[3].price.toFixed(2) + '(元)，小计：' + (item[3].num * item[3].price).toFixed(2) + '(元)\n' +
        '名称：' + item[5].name + '，数量：' + item[5].num + item[5].unit + '，单价：' + item[5].price.toFixed(2) + '(元)，小计：' + ((item[5].num-1) * item[5].price).toFixed(2) + '(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：'+item[1].name+'，数量：1'+item[1].unit+'\n' +
        '名称：' + item[5].name + '，数量：1' + item[5].unit+'\n' +
        '----------------------\n' +
    '总计：' + ((item[1].num - 1) * item[1].price + (item[3].num) * item[3].price + (item[5].num - 1) * item[5].price).toFixed(2)+'(元)\n' +
    '节省：' +(item[1].price + item[5].price).toFixed(2)+'(元)\n' +
        '**********************';
    return result;


}