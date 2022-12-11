function createStack() {
    let items = [];
    return {
        push(item) {
            return items.push(item);
        },
        pop() {
            return items.pop();
        },
        print(){
            return console.log('items :>> ', items);
        }
    };
}
const stack = createStack();
stack.print();
stack.push(10);
stack.print();
stack.push(5);
stack.print();
stack.pop();
stack.print();

console.log('stack.items :>> ', stack.items);
stack.items = [1,2,3];
stack.print();
