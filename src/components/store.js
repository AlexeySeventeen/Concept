import {createStore} from 'vuex';

export default createStore({
  state: {
    id: 0,
    userName: null,
    projects: {},
    currentProject: null,
  },
  mutations: {
    setName: (state, payload) => {
      state.userName = payload;
    },
    setProjects: (state, payload) => {
      state.projects = payload;
    },
    setCurrentProject: (state, payload) => {
      state.currentProject = payload;
    },
    createNewPost(state, newProject) {
      state.projects.push(newProject);
    },
    changeImg(state, newProject) {
      state.currentProject.img = newProject;
    },
    changeFavorite(state, newProject) {
      state.currentProject.isFavorite = newProject;
    },
    changeArchive(state, newProject) {
      state.currentProject.isArchive = newProject;
    },
    changeToggle(state, object) {
      state.currentProject.string[object.id].toggleOpen = object.value;
    },
    changeToDo(state, object) {
      state.currentProject.string[object.id].toDoActieve = object.value;
    },
    changeText(state, object) {
      state.currentProject.string[object.id].content = object.newText;
    },
    changeHeading(state, object) {
      state.currentProject.string[object.id].heading = object.newText;
    },
    changeType(state, object) {
      state.currentProject.string[object.id].type = object.newText;
    },
    changeAlign(state, object) {
      state.currentProject.string[object.id].Align = object.newText;
    },
    changeColor(state, object) {
      state.currentProject.string[object.id].Color = object.newText;
    },
    changeBgColor(state, object) {
      state.currentProject.string[object.id].BgColor = object.newText;
    },
    changeString(state, object) {
      if (object.todo === 'Delete' && state.currentProject.string.length > 1) {
        state.currentProject.string.splice(object.id, 1);
      }
      if (object.todo === 'Insert Above' && object.id > 0) {
        [state.currentProject.string[object.id - 1], state.currentProject.string[object.id]] = [
          state.currentProject.string[object.id],
          state.currentProject.string[object.id - 1],
        ];
      }
      if (object.todo === 'Insert Below' && object.id < state.currentProject.string.length - 1) {
        [state.currentProject.string[object.id], state.currentProject.string[object.id + 1]] = [
          state.currentProject.string[object.id + 1],
          state.currentProject.string[object.id],
        ];
      }
      if (object.todo === 'Add New String') {
        state.currentProject.string.splice(object.id + 1, 0, {type: 'text', content: '', Align: 'left', Color: 'Black', BgColor: 'White', toDoActieve: false});
      }
    },
    changeTypeToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].type = object.newText;
    },
    changeAlignToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].Align = object.newText;
    },
    changeColorToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].Color = object.newText;
    },
    changeBgColorToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].BgColor = object.newText;
    },
    changeStringToggle(state, object) {
      if (object.info === 'Delete' && state.currentProject.string[object.mainId].content.length > 1) {
        state.currentProject.string[object.mainId].content.splice(object.id, 1);
      }
      if (object.info === 'Insert Above' && object.id > 0) {
        [state.currentProject.string[object.mainId].content[object.id - 1], state.currentProject.string[object.mainId].content[object.id]] = [
          state.currentProject.string[object.mainId].content[object.id],
          state.currentProject.string[object.mainId].content[object.id - 1],
        ];
      }
      if (object.info === 'Insert Below' && object.id < state.currentProject.string[object.mainId].content[object.id].length - 1) {
        [state.currentProject.string[object.mainId].content[object.id], state.currentProject.string[object.mainId].content[object.id + 1]] = [
          state.currentProject.string[object.mainId].content[object.id + 1],
          state.currentProject.string[object.mainId].content[object.id],
        ];
      }
      if (object.info === 'Add New String') {
        state.currentProject.string[object.mainId].content.splice(object.id + 1, 0, {
          type: 'text',
          content: '',
          Align: 'left',
          Color: 'Black',
          BgColor: 'White',
          toDoActieve: false,
        });
      }
    },
    changeToDoToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].toDoActieve = object.value;
    },
    changeTextToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].content = object.newText;
    },
  },
  getters: {
    sortProjects: (state) => (sort, number) => {
      let numberSort;
      if (number !== 'All') {
        numberSort = number.split(' ')[0];
      } else {
        numberSort = Array.from(state.projects).filter((item) => item.isArchive === false).length;
      }
      if (sort === 'Manual') {
        return Array.from(state.projects)
          .filter((item) => item.isArchive === false)
          .slice(0, +numberSort);
      }
      if (sort === 'Last edited') {
        return Array.from(state.projects)
          .filter((item) => item.isArchive === false)
          .sort((a, b) => b.lastChangeSort - a.lastChangeSort)
          .slice(0, +numberSort);
      }
    },
    notArchive: (state) => () => {
      return Array.from(state.projects).filter((item) => item.isArchive === false);
    },
    ArchiveProjects: (state) => () => {
      return Array.from(state.projects).filter((item) => item.isArchive === true);
    },
    FavoriteProjects: (state) => () => {
      return Array.from(state.projects).filter((item) => item.isFavorite === true);
    },
  },
  actions: {},
});
