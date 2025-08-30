class item{
    linkNextItem
    linkPreviousItem
    constructor(priority, value){
        this.priority = priority
        this.value = value
    } 
    getPriority(){
        return this.priority
    }
    thisIsHead(){
        return this.linkNextItem==null?true:false
    }
    setLinkNextItem(item){
        this.linkNextItem = item
    }
    getLinkNextItem(){
        return this.linkNextItem
    }
    setLinkPreviousItem(item){
        this.linkPreviousItem = item
    }
    getLinkPreviousItem(){
        return this.linkPreviousItem
    }
    getValue(){
        return this.value
    }
}

class priorityQueue{
    head
    // tail
    construcor(){}
    push(value, priority = 0){
        const newItem = new item(priority, value)
        if (head == null) {
            this.head = newItem
            // this.tail = newItem
        }
        else {
            addPreviousItem(head)
        }
    }
    addPreviousItem(item, newItem){
        if (item.getPriority()<newItem.getPriority()) {
            if (item.thisIsHead) {
                this.head = newItem
            }
            else{
                nextItem = item.getLinkNextItem()
                newItem.setLinkNextItem(nextItem)
                nextItem.setLinkPreviousItem(newItem)
            }
            newItem.setLinkPreviousItem(item)
            item.setLinkNextItem(newItem)
        }
        else{
            const previousItem = item.getLinkPreviousItem()
            if (previousItem == null) {
                addPreviousItem(previousItem, newItem)
            }
            else {
                item.setLinkPreviousItem(newItem)
            }
        }
    }
    pop(){
        let returnValue = null
        if (!this.head) {
            returnValue = this.head.getValue()
            this.head = this.head.getLinkPreviousItem()
        }
        return returnValue
    }
}