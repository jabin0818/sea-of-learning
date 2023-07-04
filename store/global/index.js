import data from '@/js/course.json'
import { getuserCourse, setuserCourse, clearuserCourse, getUserCollect, setUserCollect, clearUserCollect ,getUserSignIn, setUserSignIn, clearUserSignIn} from '../../common/localStorage';
export default {
	namespaced: true, 
	state: () =>  ({
		userCourse : getuserCourse() || {},
		userCollect: getUserCollect() || {},
		userSingIn: getUserSignIn() || {}
	}),
	
	mutations: {
		// myDataList(state,step) {
		// 	state.list = step
		// },
		// addActive(state,step) {
		// 	state.list.push(step)
		// 	console.log(state.list,'stateList')
		// },
		// deleteActive(state,step) {
		// 	state.list = state.list.filter((x) => x.id != step)
		// 	console.log(state.list,'deteleList')
		// }
		saveUserCourse(state, userCourse) {
			state.userCourse = userCourse
			setuserCourse(userCourse)
		},
		saveUserCollect(state, userCollect) {
			state.userCollect = userCollect
			setUserCollect(userCollect)
		},
		saveUserSingIn(state, userSingIn) {
			state.userSingIn = userSingIn
			setUserSignIn(userSingIn)
		},
	},
	
	actions: {
		addUserCourse(context,userCourse) {
			// console.log(userCourse);
			context.commit('saveUserCourse',userCourse)
			return 'ok'
		},
		addUserCollect(context,userCollect) {
			// console.log(userCollect);
			context.commit('saveUserCollect',userCollect)
			return 'ok'
		},
		addUserSingIn(context,userSingIn) {
			// console.log(userCollect);
			context.commit('saveUserSingIn',userSingIn)
			return 'ok'
		},
	},
	
	getters: {
		
	}
}