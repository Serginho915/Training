class Calendar {
    constructor(events){
        this.events = events;
    }   
}

Calendar.prototype.addEvent = function(event) {
    Array.isArray(event) ? event.forEach(event => this.events.push(event)) : this.events.push(event);
}

Calendar.prototype.removeEvent = function(eventId){
    let index = this.events.findIndex(event => event.id === eventId);
    if (index !== -1) {
        this.events.splice(index, 1);
    }
}
Calendar.prototype.getEventsByDate = function(date){
    return this.events.filter(event => event.date === date);
}

Calendar.prototype.getEventsByMonth = function(month, year = new Date().getFullYear()) {
    const filteredEvents = this.events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === month - 1 && eventDate.getFullYear() === year;
    });
    if (filteredEvents.length === 0) {
        return "No events in the specified range.";
    } else {
        return filteredEvents;
    }
}
Calendar.prototype.getEventsInRange = function(startDate, endDate) {
   const filteredEvents =  this.events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
    });

    if (filteredEvents.length === 0) {
        return "No events in the specified range.";
    } else {
        return filteredEvents;
    }
}


class Event{
    constructor(id,title,date,duration,description = ''){
        this.id = id;
        this.title = title;
        this.date = new Date(date);
        this.duration = duration;
        this.description = description;
    }
}

let event1 = new Event(1, "Зустріч", "2024-05-06", 1, "Обговорення планів проекту");
let event2 = new Event(2, "Обід", "2024-05-07", 0.5, "Зустріч з колегами");

let myCalendar = new Calendar([event1]);
myCalendar.addEvent(event2);

console.log(myCalendar.events);
