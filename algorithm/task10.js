class Item{
    colorRed
    childLeft
    childRight
    parent
    constructor(value){
        this.value = value
    }
    noneChilds(){
        return (!this.childLeft && !this.childRight)
    }
    twoChilds(){
        return (this.childLeft && this.childRight)
    }
    searchMaxItem(){
        if (this.childRight) {
            return this.childRight.searchMaxItem()
        }
        else{
            return this
        }
    }
    setChild(position, newChild){
        if (this[position]) {
            this[position].parent = null
        }
        this[position] = newChild
        if (newChild) {
            newChild.parent = this
            
        }
    }
}

class Tree{
    head
    // length = 0
    constructor(){}
    setHead(item){
        this.head = item
        if (item) {
            item.colorRed = false
            item.parent = null
        }
    }
    searchParentHead(value){
        if(this.head.value==value){
            return null
        }
        else{
           return this.searchParent(this.head, value) 
        }
    }
    balancing(son){
        let father = son.parent
        const grandpa = father.parent
        const uncle = grandpa[(grandpa.childLeft!=father)?"childLeft":"childRight"]
        if (uncle?.colorRed) {
            father.colorRed=false
            uncle.colorRed=false
            if (grandpa!=this.head) {
                grandpa.colorRed = true
            }
        }
        else{
            const sideFather = grandpa.childLeft==father?"childLeft":"childRight"
            const sideSon = father.childLeft==son?"childLeft":"childRight"
            if (sideFather!=sideSon) {
                grandpa.setChild(sideFather, son)
                if (son[sideFather]) {
                    father.setChild(sideSon, son[sideFather])
                }
                else{
                    fatherr.setChild(sideSon, null)
                }
                son.setChild(sideFather, father)
                const buffer = son
                son = father
                father = buffer
            }

            const sideBasic = sideFather
            const sideOpposite =sideFather!="childLeft"?"childLeft":"childRight"
            const parentGrandpa = grandpa.parent
            grandpa[sideBasic] = null
            if (father[sideOpposite]) {
                grandpa.setChild(sideBasic, father[sideOpposite])
            }
            father.setChild(sideOpposite, grandpa)

            father.colorRed = false
            grandpa.colorRed = true
            if (parentGrandpa) {
                const sideGrandpa = parentGrandpa.childLeft==grandpa?"childLeft":"childRight"
                parentGrandpa.setChild(sideGrandpa, father)
            }
            else{
                this.setHead(father)
            }
        }
    }
    balancing2(item){
        const father = item?.parent
        const grandpa = father?.parent
        let brother = father[father.childLeft!=item?"childLeft":"childRight"]
        const sideBasic = father.childLeft==item?"childLeft":"childRight"
        const sideOpposite = sideBasic!="childLeft"?"childLeft":"childRight"
        if(!brother.colorRed){
            if (!brother.childLeft?.colorRed&&!brother.childRight?.colorRed) {
                brother.colorRed = true
                if (!father.colorRed) {
                    father.colorRed = false
                }
                else{
                    balancing2(father)
                }
            }
            else {
                if (!brother[sideOpposite].colorRed) {
                    const nephewSideBasic = brother[sideBasic]
                    brother.setChild(sideBasic, nephewSideBasic[sideOpposite])
                    nephewSideBasic.setChild(sideOpposite, brother)
                    father.child(sideOpposite, nephewSideBasic)
                    nephewSideBasic.colorRed = false
                    brother.colorRed = true
                    brother = nephewSideBasic
                }
                father.setChild(sideOpposite, brother[sideBasic]?brother[sideBasic]:null)
                brother.setChild(sideBasic, father)
                brother.colorRed =  father.colorRed
                father.colorRed = false
                brother[sideOpposite].colorRed = false
                if (father!=this.head) {
                    grandpa.setChild(grandpa.childLeft==father?"childLeft":"childRight", brother)
                }
                else{
                    this.head = brother
                }
            }
        }
        else{
            father.setChild(sideOpposite, brother[sideBasic])
            brother.setChild(sideBasic, father)
            if (father!=this.head) {
                grandpa.setChild(grandpa.childLeft==father?"childLeft":"childRight", brother)
            }
            else{
                this.head = brother
            }
            this.balancing2(item)
        }
    }
    push(value){
        const newItem = new Item(value)
        if (this.head==null) {
            this.setHead(newItem)
        }
        else{
            this.add(this.head, newItem)
        }

    }
    add(father, newItem){
        const son = father.value>newItem.value?"childLeft":"childRight"
        if (father[son]) {
            this.add(father[son], newItem)
        }
        else{
            father.setChild(son, newItem)
            newItem.colorRed = true


        }
        if(father[son]?.colorRed&&father.colorRed)
            this.balancing(newItem)

    }
   
    remove(value){
        if (this.head.noneChilds()) {
            if (this.head.value==value) {
                this.setHead(null)
            }
        }
        else{
            this.delite(this.head, value)
        }
    }
    delite(item, value){
        if(item.value==value){
            return item
        }
        const sideСhild = item.value>value?"childLeft":"childRight"

        const returnItem = this.delite(item[sideСhild], value)
        if (returnItem) {
            if (item[sideСhild].noneChilds()) {
                if (item[sideСhild].colorRed) {
                    item.setChild(sideСhild, null)
                }
                else{
                    this.balancing2(item[sideСhild])
                    item.setChild(sideСhild, null)

                }
            }
            else if (item[sideСhild].twoChilds()) {
                const child = item[sideСhild]
                const MaxValue = child.childLeft.searchMaxItem().value
                this.delite(child, MaxValue)
                child.value = MaxValue
            } 
            else{
                const side = item[sideСhild][item[sideСhild].childLeft?"childLeft":"childRight"]
                const colorBlack = (!item[sideСhild].colorRed)
                item.setChild(sideСhild, item[sideСhild][side])
                if (colorBlack) {
                    if (item[sideСhild].colorRed) {
                        item[sideСhild].colorRed = false
                    }
                    else{
                        this.balancing2(item[sideСhild])
                    }
                }
                
            }
        }
    }
}
