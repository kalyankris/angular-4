export class CounterSerice{

    active2inActiveCount = 0;
    inActive2activeCount = 0;

incactive2inActiveCount(){
    this.active2inActiveCount++;
    console.log( "active"  + this.active2inActiveCount);
    
}

incinActive2activeCount(){
    this.inActive2activeCount++;
    console.log( "inactive" + this.inActive2activeCount);
    
}


}