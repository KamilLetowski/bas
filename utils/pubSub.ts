type Callback = (data: unknown) => void;

class PubSub {
  private events: Record<string, Callback[]> = {};

  subscribe(eventName: string, callback: Callback) {
    if (this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  unsubscribe(eventName: string, callback: Callback) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === callback) {
          this.events[eventName].splice(i, 1);
          break;
        }
      }
    }
  }

  publish<T>(eventName: string, data: T) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (callback) {
        callback(data);
      });
    }
  }
}

const pubSub = new PubSub();

export default pubSub;
