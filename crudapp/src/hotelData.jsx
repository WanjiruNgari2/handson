const URL = "http://localhost:8001/guests";

export const getGuests = async () => {
    const response = await fetch(URL);
    if(!response.ok) {
        throw new Error("Failed to fetch guests");
    }
    return response.json();
};

export const addGuest = async (guest) => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(guest),
    });
    if(!response.ok) {
        throw new Error("Failed to add guest");
    }
    return response.json();
};


export const updateGuest = async (id, guest) => {
    const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(guest),
    });
    if(!response.ok) {
        throw new Error("Failed to update guest");
    }
    return response.json();
}


export const deleteGuest = async (id) => {
    const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
    });
    if(!response.ok) {
        throw new Error("Failed to delete guest");
    }
}
