
let users = {}

function add_rel(user, follower){
    if(!users.hasOwnProperty(user)){
        users[user] = []
    }
    if(!users.hasOwnProperty(follower)){
        users[follower] = []
    }
    users[user].push(follower)
}

add_rel("a", 'b')
add_rel("a", 'c')
add_rel("b", 'd')
add_rel("b", 'e')

add_rel("c", 'f')
add_rel("c", 'g')

add_rel("f", 'da')

function dfs(users, start, end){
    console.log(users)
    const explored = new Set()
    if(!users[start]) return null;

    const frontier = [start]

    while(frontier.length > 0){
        const curr = frontier.pop()
        if(curr[0] === end[0]) return curr;

        let currFollowers = users[curr]
        for(const user of currFollowers){
            if(!explored.has(user)) frontier.push(user)
        }
        explored.add(curr)
    }

    return null
}

function recursive_dfs(users, start, end){
    if(start[0] === end[0]) {
        console.log("found search", start)
    } else{
        console.log(start)
    }
    let curr = users[start]
    for(let child of curr ){
        recursive_dfs(users, child, end)
    }
}
// recursive_dfs(users, 'a', 'e')
module.exports = {
    users, dfs
}