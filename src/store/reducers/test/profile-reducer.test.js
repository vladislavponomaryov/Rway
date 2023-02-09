import profile, {addPostActionCreator, deletePost} from "../profile";

let state = {
    posts: [
        {id: 1, message: 'Hi, it is my first project )', likesCount: 9},
        {id: 2, message: 'Cool', likesCount: 4}
    ]
}
test('length of new post should be incremented', () => {

    // 1. test data
    let action = addPostActionCreator('it is test post')

    // 2. action
    let newState = profile(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {

    // 1. test data
    let action = addPostActionCreator('it is test post')

    // 2. action
    let newState = profile(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3)
});

test('after deleting length should it be decrement if id is incorrect', () => {

    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profile(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1)
});