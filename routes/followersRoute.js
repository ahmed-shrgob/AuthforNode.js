const express = require('express');
const followersController = require('../Controllers/followersController');
const router = express.Router();

router.post('/follower', followersController.followUser);

/**
 * http://localhost:8000/follo/follower
 * {
  "userId":"662e62f91859045f23a1cb0b",
  "targetUserId":"66246ee771bc5fbd7c7a355b"
} */
router.post('/checkIfUserFollows', followersController.checkIfUserFollows);
/**
 * {
  "userId":"662fb3e4a5a76f34a336d59e",
  "targetUserId":"663a2346d93ea6c9e51ea394"
}
http://localhost:8000/follo/follower
 */
router.get('/getFollowers/:id', followersController.getFollowers);
/** http://localhost:8000/follo/getFollowers/662e62f91859045f23a1cb0b */
router.post('/unFollowUser', followersController.unFollowUser);
/**http://localhost:8000/follo/unFollowUser  
 * {
  "userId":"662fb3e4a5a76f34a336d59e",
  "targetUserId":"663a2346d93ea6c9e51ea394"
}
*/


/**
 * http://localhost:8000/follo/checkIfUserFollows
 * {
 * {
  "followerUserID":"663a2346d93ea6c9e51ea394",
  "followedUserID":"662fb3e4a5a76f34a336d59e"
}
 * } */
module.exports = router;

