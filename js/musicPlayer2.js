class EventManager {
    constructor(ActualButton) {
        this.MusicList = [];
        this.button = ActualButton;
    }

    subscribe(observer) {
        this.MusicList.push(observer);
    }

    onChange(data) {
        this.MusicList.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {

    }
}

export {EventManager,Observer};