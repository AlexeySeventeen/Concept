import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    id: JSON.parse(localStorage.getItem('id')) || null,
    userName: JSON.parse(localStorage.getItem('name')) || null,
    userPassword: JSON.parse(localStorage.getItem('password')) || null,
    userLogin: JSON.parse(localStorage.getItem('login')) || null,
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    currentProject: JSON.parse(localStorage.getItem('currentProject')) || null,
    language: JSON.parse(localStorage.getItem('language')) || 'English',
    theme: JSON.parse(localStorage.getItem('theme')) || 'Light',
    isLoading: false,
  },
  mutations: {
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setId: (state, payload) => {
      state.id = payload;
    },
    setTheme: (state, payload) => {
      state.theme = payload;
    },
    setLanguage: (state, payload) => {
      state.language = payload;
    },
    setName: (state, payload) => {
      state.userName = payload;
    },
    setPassword: (state, payload) => {
      state.userPassword = payload;
    },
    setLogin: (state, payload) => {
      state.userLogin = payload;
    },
    setProjects: (state, payload) => {
      state.projects = payload;
    },
    setCurrentProject: (state, payload) => {
      state.currentProject = payload;
    },
    createNewPost(state, newProject) {
      if (Array.isArray(state.projects)) {
        state.projects.push(newProject);
      } else {
        state.projects = newProject;
      }
    },
    changeLocalStorage(state) {
      localStorage.setItem('currentProject', JSON.stringify(state.currentProject));
      localStorage.setItem('projects', JSON.stringify(state.projects));
    },
    changeMokky(state) {
      axios.patch('https://aa9aa081e8c8442e.mokky.dev/items/' + state.id, {
        projects: state.projects,
      });
    },
    changeData(state) {
      let currentDate = null;
      const date = new Date().toString();
      const dateArray = date.split(' ').slice(1, 5);
      currentDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}, ${dateArray[3]}`;
      state.currentProject.lastChange = currentDate;
      state.currentProject.lastChangeSort = Date.now();
      this.commit('changeLocalStorage');
    },
    liveUpdate() {
      this.commit('changeData');
      this.commit('changeLocalStorage');
      this.commit('changeMokky');
    },
    changeImg(state, newProject) {
      state.currentProject.img = newProject;
      this.commit('liveUpdate');
    },
    changeFavorite(state, newProject) {
      state.currentProject.isFavorite = newProject;
      this.commit('liveUpdate');
    },
    changeArchive(state, newProject) {
      state.currentProject.isArchive = newProject;
      this.commit('liveUpdate');
    },
    changeToggle(state, object) {
      state.currentProject.string[object.id].toggleOpen = object.value;
      this.commit('liveUpdate');
    },
    changeToDo(state, object) {
      state.currentProject.string[object.id].toDoActieve = object.value;
      this.commit('liveUpdate');
    },
    changeText(state, object) {
      state.currentProject.string[object.id].content = object.newText;
      this.commit('liveUpdate');
    },
    changeHeading(state, object) {
      state.currentProject.string[object.id].heading = object.newText;
      this.commit('liveUpdate');
    },
    changeType(state, object) {
      if (state.currentProject.string[object.id].heading !== undefined && object.newText !== 'drop-list') {
        let oldContent = '';
        state.currentProject.string[object.id].content.forEach((text) => {
          oldContent = `${oldContent} ${text.content}`;
        });
        state.currentProject.string[object.id].content = state.currentProject.string[object.id].heading + oldContent;
        delete state.currentProject.string[object.id].heading;
      }
      if (state.currentProject.string[object.id].rows !== undefined && object.newText !== 'table') {
        let oldContent = '';
        state.currentProject.string[object.id].content.forEach((text) => {
          text.forEach((value) => {
            oldContent = `${oldContent} ${value}`;
          });
        });
        state.currentProject.string[object.id].content = oldContent;
        delete state.currentProject.string[object.id].cols;
        delete state.currentProject.string[object.id].rows;
      }

      if (object.newText === 'table') {
        const contentBefore = state.currentProject.string[object.id].content;
        state.currentProject.string[object.id].rows = 3;
        state.currentProject.string[object.id].cols = 2;
        state.currentProject.string[object.id].content = [
          [contentBefore, ''],
          ['', ''],
          ['', ''],
        ];
      }
      if (object.newText === 'drop-list') {
        const contentBefore = state.currentProject.string[object.id].content;
        state.currentProject.string[object.id].heading = contentBefore;
        let thisColor = '';
        state.theme === 'Light' ? (thisColor = 'Black') : (thisColor = 'White'),
          (state.currentProject.string[object.id].content = [
            {
              type: 'text',
              toDoActieve: false,
              content: '',
              Align: 'left',
              Color: thisColor,
              BgColor: 'Transparent',
            },
          ]);
      }

      if (object.newText !== 'to-do') {
        state.currentProject.string[object.id].toDoActieve = false;
      }
      state.currentProject.string[object.id].type = object.newText;
      this.commit('liveUpdate');
    },
    changeAlign(state, object) {
      state.currentProject.string[object.id].Align = object.newText;
      this.commit('liveUpdate');
    },
    changeColor(state, object) {
      state.currentProject.string[object.id].Color = object.newText;
      this.commit('liveUpdate');
    },
    changeBgColor(state, object) {
      state.currentProject.string[object.id].BgColor = object.newText;
      this.commit('liveUpdate');
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
        let thisColor = '';
        state.theme === 'Light' ? (thisColor = 'Black') : (thisColor = 'White'),
          state.currentProject.string.splice(object.id + 1, 0, {
            type: 'text',
            content: '',
            Align: 'left',
            Color: thisColor,
            BgColor: 'Transparent',
            toDoActieve: false,
          });
      }
      this.commit('liveUpdate');
    },
    changeTypeToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].type = object.newText;
      this.commit('liveUpdate');
    },
    changeAlignToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].Align = object.newText;
      this.commit('liveUpdate');
    },
    changeColorToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].Color = object.newText;
      this.commit('liveUpdate');
    },
    changeBgColorToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].BgColor = object.newText;
      this.commit('liveUpdate');
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
      if (object.info === 'Insert Below' && object.id < state.currentProject.string[object.mainId].content.length - 1) {
        [state.currentProject.string[object.mainId].content[object.id], state.currentProject.string[object.mainId].content[object.id + 1]] = [
          state.currentProject.string[object.mainId].content[object.id + 1],
          state.currentProject.string[object.mainId].content[object.id],
        ];
      }
      if (object.info === 'Add New String') {
        let thisColor = '';
        state.theme === 'Light' ? (thisColor = 'Black') : (thisColor = 'White'),
          state.currentProject.string[object.mainId].content.splice(object.id + 1, 0, {
            type: 'text',
            content: '',
            Align: 'left',
            Color: thisColor,
            BgColor: 'Transparent',
            toDoActieve: false,
          });
      }
      this.commit('liveUpdate');
    },
    changeToDoToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].toDoActieve = object.value;
      this.commit('liveUpdate');
    },
    changeTextToggle(state, object) {
      state.currentProject.string[object.mainId].content[object.id].content = object.newText;
      this.commit('liveUpdate');
    },
    deletePost(state, post) {
      state.projects.forEach((item, index) => {
        if (item.title === post.title && item.lastChangeSort === post.lastChangeSort) {
          state.projects.splice(index, 1);
        }
      });
      this.commit('liveUpdate');
    },

    // table section
    changeTableText(state, object) {
      state.currentProject.string[object.id].content[object.rowIndex][object.colIndex] = object.newText;
      this.commit('liveUpdate');
    },

    clearTableRow(state, object) {
      const clearString = [];
      for (let index = 0; index < state.currentProject.string[object.id].rows; index++) {
        clearString.push('');
      }
      state.currentProject.string[object.id].content.splice(object.index, 1, clearString);
      this.commit('liveUpdate');
    },
    clearTableCol(state, object) {
      state.currentProject.string[object.id].content.forEach((item) => {
        item[object.index] = object.newText;
      });
      this.commit('liveUpdate');
    },

    deleteTableRow(state, object) {
      if (state.currentProject.string[object.id].rows > 1) {
        state.currentProject.string[object.id].rows--;
        state.currentProject.string[object.id].content.splice(object.index, 1);
      }
      this.commit('liveUpdate');
    },
    deleteTableCol(state, object) {
      if (state.currentProject.string[object.id].cols > 1) {
        state.currentProject.string[object.id].cols--;
        state.currentProject.string[object.id].content.forEach((row) => {
          row.splice(object.index, 1);
        });
      }
      this.commit('liveUpdate');
    },
    aboveTableRow(state, object) {
      [state.currentProject.string[object.id].content[object.index - 1], state.currentProject.string[object.id].content[object.index]] = [
        state.currentProject.string[object.id].content[object.index],
        state.currentProject.string[object.id].content[object.index - 1],
      ];
      this.commit('liveUpdate');
    },
    belowTableRow(state, object) {
      if (object.index < state.currentProject.string[object.id].rows - 1) {
        [state.currentProject.string[object.id].content[object.index + 1], state.currentProject.string[object.id].content[object.index]] = [
          state.currentProject.string[object.id].content[object.index],
          state.currentProject.string[object.id].content[object.index + 1],
        ];
      }
      this.commit('liveUpdate');
    },
    leftTableCol(state, object) {
      state.currentProject.string[object.id].content.forEach((item) => {
        [item[object.index - 1], item[object.index]] = [item[object.index], item[object.index - 1]];
      });
      this.commit('liveUpdate');
    },
    rightTableCol(state, object) {
      if (object.index < state.currentProject.string[object.id].cols - 1) {
        state.currentProject.string[object.id].content.forEach((item) => {
          [item[object.index + 1], item[object.index]] = [item[object.index], item[object.index + 1]];
        });
      }
      this.commit('liveUpdate');
    },
    changeTable(state, object) {
      if (object.value === 'rows') {
        const array = [];
        let i = 1;
        while (i < state.currentProject.string[object.id].cols) {
          array.push('');
          i++;
        }
        state.currentProject.string[object.id].content.push(array);
        state.currentProject.string[object.id].rows++;
      }
      if (object.value === 'cols') {
        state.currentProject.string[object.id].content.forEach((item) => {
          item.push('');
        });
        state.currentProject.string[object.id].cols++;
      }

      this.commit('liveUpdate');
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
      if (sort === 'Last edit') {
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
    SearchTitle: (state) => (searchValue) => {
      return Array.from(state.projects).filter((item) => item.title.toLowerCase().includes(searchValue));
    },
    SearchContent: (state) => (searchValue) => {
      const returnArray = [];
      Array.from(state.projects).forEach((item) => {
        item.string.forEach((content) => {
          if (content.content.toString().toLowerCase().includes(searchValue)) {
            returnArray.push(item);
          }
        });
      });
      const uniqValue = new Set(returnArray);
      return Array.from(uniqValue);
    },
    SearchAll: (state) => (array1, array2, title, content) => {
      if (title && content === false) {
        return array1;
      }
      if (content && title === false) {
        return array2;
      }
      if (content && title) {
        const uniq = new Set(array1.concat(array2));
        return uniq;
      }
    },
  },
  actions: {},
});
