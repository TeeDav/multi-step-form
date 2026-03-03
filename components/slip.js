s => ({ user: { ...s.user, name: 'Jane' } })

//does something with state as a parameter and returns 
//an updated state

const s  = formStore.get()




formStore.update( s => (
    { user: { ...s.user, name: 'Jane' } }
))
//or, like a normal function block
// formStore.update(s) {
//     return { user: { ...s.user, name: 'Jane' } }
// }

function userUpdate(u) {
    //do something with s and return
    u.user.name = s.user.name
    u.user.email = s.user.email
    u.user.phone = s.user.phone
    //no need to use spread operator in update fn in 
    //formStore

    //or
    u.user = { ...s.user, name: 'Jane' }
    return u //should return new state
}

formStore.update(userUpdate)

//so in a page, we hould have:
//1. a get function from the store to pull info
//e.g <p>{s.username}</p>
//2. we would do some logic with the info we pulled
//3. we would have an update function that would
//connect our changes to info in the store
//4. call the update function