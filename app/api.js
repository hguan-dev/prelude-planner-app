url = "https://prelude-planner.loca.lt";

async function getEvents() {
  try {
    const res = await fetch(`${url}/event`);
    const events = await res.json();
    return events;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function editEvent(event) {
  try {
    const res = await fetch(`${url}/event/${event.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    const resEvent = await res.json();
    return resEvent;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// didn't test
async function deleteEvent(eventId) {
  try {
    const res = await fetch(`${url}/event/${eventId}`, {
      method: "DELETE",
    });
    return res.status === 200;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// didn't test
async function createEvent(eventInfo) {
  try {
    const res = await fetch(`${url}/event`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    });
    const resEvent = await res.json();
    return resEvent;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export { getEvents, editEvent, deleteEvent, createEvent };
