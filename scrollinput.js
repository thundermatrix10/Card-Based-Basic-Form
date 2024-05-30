let activeindex = 0;

const groups = document.getElementsByClassName("card");

const handlenext = () => {
    // one up active index
    const nextindex = activeindex + 1 <= groups.length -1 ? activeindex +1 : 0;
    const currentgroup = document.querySelector(`[data-index = "${activeindex}"]`),
    nextgroup = document.querySelector(`[data-index="${nextindex}"]`);

    // active becomes after
    currentgroup.dataset.status = "after" ;

    //next becomes active
    nextgroup.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
        nextgroup.dataset.status = "active";
        activeindex = nextindex
    }
    );
}

const handleback = () => {
    // one up active index
    const nextindex = activeindex - 1 >= 0 ? activeindex - 1 : groups.length - 1;
    const currentgroup = document.querySelector(`[data-index = "${activeindex}"]`),
    nextgroup = document.querySelector(`[data-index="${nextindex}"]`);

    // active becomes before
    currentgroup.dataset.status = "before" ;

    //next becomes active
    nextgroup.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
        nextgroup.dataset.status = "active";
        activeindex = nextindex;
    }
    );
}