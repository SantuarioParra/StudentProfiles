
const state={
    navigationDrawer:false,
};

const getters={
  getNavigationDrawer(state){
      return state.navigationDrawer;
  }
};

const mutations={
    updateNavigationDrawer(state,navigationDrawer){
        state.navigationDrawer = navigationDrawer;
    }
};

const actions={
    updateNavigationDrawer (context,navigationDrawer){
        context.commit('updateNavigationDrawer',navigationDrawer);
    }
};

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}

