import { getUserId, setUserId, setUserInfo, getUserInfo,clearUserInfo, getUser, setUser, clearUser, clearUserSignIn, clearUserCollect, clearuserCourse } from '../../common/localStorage';
import data from '@/js/user.json'
import { aes_encrypt, aes_decrypt } from '@/common/aes_endecrypt.js';
    /**
     *  存放 ** 数据
     * **/
    
    // initial state
    const state = {
        all: { 
            id: '',
			username: '',
			password: ''
        },
		// userId: getUserId() || '',
		userInfo: getUserInfo() || {},
		isLogin: false,
    }
    
    // getters
    const getters = {}
    
    // mutations
    const mutations = {
        setPrint(state, all) { //设置参数
          //  这里的写法有两种，可以根据自己喜欢选择
           // 第一种
            // state.all = all;
            
		   // 第二种
			state.all.id = (all.id == '' || all.id) ? all.id : state.all.id;
			state.all.username = (all.username == '' || all.username) ? all.username : state.all.username;
			state.all.password = (all.password == '' || all.password) ? all.password : state.all.password;
		
        },
		//登录成功立马保存token
		// SAVETOKEN(state, token){
		// 	state.token = token;
		// },
	
		//存储用户信息
		SAVEUSERINFO(state, userInfo) {
			state.userInfo = userInfo;
			state.isLogin = true
			setUserInfo(userInfo)
		},
	
		// 退出登录
		USERLOGOUT(state) {
			// state.token = '';
			state.userInfo = {};
			state.isLogin = false
			clearUserInfo()
			clearUserSignIn()
			clearUserCollect()
			clearuserCourse()
			// clearToken();
			// clearUserId()
		},
    }
	
	// actions
	const actions = {
		
		//用户登录
		async userLogin({ commit }, {username, password} ) {
	
			let isExist = getUser(username)
			try{
				let primaryPassword = aes_decrypt(isExist)
				
				if(isExist) {
					if(password === primaryPassword) {
						commit("SAVEUSERINFO", {
							username: username
						});
						return 'ok'
					}
				} else {
					// console.log('用户不存在！');
					return 'not'
				}
			}catch(e){
				// console.log('用户不存在！');
				return 'not'
			}
			
			
		},
	
		//用户退出登录
		async userLogout({ commit }) {
	
			commit("USERLOGOUT");
			return 'ok'
	
		},
		
		userRegister({ commit }, {username, password}) {
			
			// if(username)
			// console.log(username);
			// console.log(password);
			let isExist = getUser(username)
			if(!isExist) {
				console.log('用户不存在！');
				let encryptPassword = aes_encrypt(password)
				setUser(username,encryptPassword)
				return 'ok'
			} else {
				console.log('用户名已被占用');
				return 'not'
			}
		}
	
		// //获取用户信息
		// async getUserInfo({ commit, state }) {
		// 	if(state.token) {
		// 		console.log('getUserInfo调用了');
		// 		let result = await obtainUserInfo(state.userId);
		// 		console.log(result);
		// 		if (result.code === 200) {
		// 			commit("SAVEUSERINFO", result.data[0]);
		// 			return 'ok';
		// 		} else {
		// 			return Promise.reject(new Error('faile'));
		// 		}
		// 	} else {
		// 		console.log('getUserInfo没调用');
		// 	}
	}
    
    export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }
