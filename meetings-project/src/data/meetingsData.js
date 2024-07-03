import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';

class MeetingsData {

  meetings = [];

  baseUrl = `${import.meta.env.VITE_API_URL}/appointment`;
  constructor() {
    makeObservable(this, {
      meetings: observable,
      getMeetings: action,
      addMeeting: action
    });
    this.getMeetings();
  }

  getMeetings() {
    axios.get(`${this.baseUrl}s`).then((result) => {
      runInAction(() => {
        this.meetings = result.data;
        this.meetings.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
      });
    });
  }

  addMeeting(meeting, SetCanAdd, SetAddMeeting) {
    fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meeting)
    }).then((result) => {
      runInAction(() => {
        if (result.status == 400)
          SetCanAdd(false);
        else {
          SetAddMeeting(false);
          this.meetings.push(meeting);
          this.meetings.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
        }
      });
    }).catch(() =>
      console.error(res.status));
  }
}
export default new MeetingsData();