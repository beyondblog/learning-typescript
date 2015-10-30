interface Friend {
    name: string;
    favoriteColor?: string;
}


function add(friend: Friend) {
    var name = friend.name;
    console.log(name);
}


add({ name: "beyond"}); // Ok

//add({ favoriteColor: "blue"}); // Error , ?是可选, name 必须赋值

add( {name: "beyond", favoriteColor: "blue"}); //Ok



