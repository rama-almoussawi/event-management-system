import React, { useState, useMemo } from "react";
import "../styles/Events.css";

const CATEGORIES = ["Tech", "Workshop", "Conference"];

const initialEvents = [
    {
        id: 1,
        title: "AI and Data Science Hackathon",
        category: "Tech",
        date: "2026-12-05",
        venue: "Beirut Digital District",
        seats: 40,
    },
    {
        id: 2,
        title: "Robotics Bootcamp",
        category: "Workshop",
        date: "2026-12-12",
        venue: "Innovation Lab, Beirut",
        seats: 15,
    },
    {
        id: 3,
        title: "Tech Conference",
        category: "Conference",
        date: "2027-01-16",
        venue: "Beirut Conference Center",
        seats: 120,
    },
];

const Events = () => {
    const [events, setEvents] = useState(initialEvents);
    const [registrations, setRegistrations] = useState([
        { id: 1, title: "Tech Conference", tickets: 2, status: "confirmed" },
    ]);

    const [filters, setFilters] = useState({
        search: "",
        category: "All",
        date: "",
        sort: "soonest",
    });

    const [selected, setSelected] = useState(null);
    const [tickets, setTickets] = useState(1);

    /* ---------- filtering + sorting ---------- */
    const visibleEvents = useMemo(() => {
        const list = events.filter((ev) => {
            const matchSearch = ev.title
                .toLowerCase()
                .includes(filters.search.toLowerCase());
            const matchCategory =
                filters.category === "All" || ev.category === filters.category;
            const matchDate = !filters.date || ev.date === filters.date;
            return matchSearch && matchCategory && matchDate;
        });

        list.sort((a, b) => {
            if (filters.sort === "seats") return b.seats - a.seats;
            if (filters.sort === "title") return a.title.localeCompare(b.title);
            return a.date.localeCompare(b.date);
        });

        return list;
    }, [events, filters]);

    /* ---------- handlers ---------- */
    const handleFilter = (e) =>
        setFilters({ ...filters, [e.target.name]: e.target.value });

    const handleRegister = (e) => {
        e.preventDefault();
        const count = Number(tickets);

        if (count < 1 || count > selected.seats) {
            alert(`Please choose between 1 and ${selected.seats} tickets.`);
            return;
        }

        setEvents(
            events.map((ev) =>
                ev.id === selected.id ? { ...ev, seats: ev.seats - count } : ev
            )
        );
        setRegistrations([
            ...registrations,
            { id: Date.now(), title: selected.title, tickets: count, status: "confirmed" },
        ]);
        setSelected(null);
        setTickets(1);
    };

    const handleCancelRegistration = (id) =>
        setRegistrations(registrations.filter((r) => r.id !== id));

    const formatDate = (d) =>
        d ? new Date(d + "T00:00:00").toLocaleDateString() : "Date TBD";

    /* ---------- render ---------- */
    return (
        <div>
            <section className="events py-5" id="events">
                <div className="container">

                    <h1 className="fw-bold heading-style mb-4">Events</h1>

                    {/* Filters */}
                    <div className="row g-3 mb-4 events-filters">
                        <div className="col-md-3">
                            <label htmlFor="search">Search</label>
                            <input
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Event name"
                                value={filters.search}
                                onChange={handleFilter}
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={filters.category}
                                onChange={handleFilter}
                            >
                                <option value="All">All</option>
                                {CATEGORIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="date">Date</label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={filters.date}
                                onChange={handleFilter}
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="sort">Sort by</label>
                            <select
                                id="sort"
                                name="sort"
                                value={filters.sort}
                                onChange={handleFilter}
                            >
                                <option value="soonest">Soonest</option>
                                <option value="seats">Most seats</option>
                                <option value="title">Title (A–Z)</option>
                            </select>
                        </div>
                    </div>

                    {/* Event grid */}
                    <div className="row g-4">
                        {visibleEvents.map((ev) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={ev.id}>
                                <div className="event-card">
                                    <div className={`event-banner cat-${ev.category.toLowerCase()}`}>
                                        <span>{ev.category}</span>
                                    </div>
                                    <div className="event-body">
                                        <h5 className="event-title">{ev.title}</h5>
                                        <p className="event-meta">
                                            {formatDate(ev.date)} · {ev.venue}
                                        </p>
                                        <p className="event-meta">
                                            {ev.seats > 0 ? `${ev.seats} seats left` : "Sold out"}
                                        </p>
                                        <button
                                            className="btn-outline-ev"
                                            onClick={() => setSelected(ev)}
                                        >
                                            View details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleEvents.length === 0 && (
                        <p className="text-muted mt-4">
                            No events match your filters. Try clearing the search or date.
                        </p>
                    )}

                    {/* My registrations */}
                    <h2 className="fw-bold mt-5 mb-3">My registrations</h2>
                    <div className="registrations">
                        {registrations.length === 0 && (
                            <div className="registration-row text-muted">
                                You haven't registered for any events yet.
                            </div>
                        )}

                        {registrations.map((r) => (
                            <div className="registration-row" key={r.id}>
                                <span>
                                    {r.title} · {r.tickets} ticket{r.tickets > 1 ? "s" : ""} · {r.status}
                                </span>
                                <button
                                    className="link-btn"
                                    onClick={() => handleCancelRegistration(r.id)}
                                >
                                    Cancel
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Details / register modal */}
            {selected && (
                <div className="ev-overlay" onClick={() => setSelected(null)}>
                    <form
                        className="ev-modal"
                        onClick={(e) => e.stopPropagation()}
                        onSubmit={handleRegister}
                    >
                        <h3 className="fw-bold">{selected.title}</h3>
                        <p className="event-meta">
                            {selected.category} · {formatDate(selected.date)} · {selected.venue}
                        </p>
                        <p className="event-meta">{selected.seats} seats left</p>

                        <label htmlFor="tickets">Tickets</label>
                        <input
                            id="tickets"
                            type="number"
                            min="1"
                            max={selected.seats}
                            value={tickets}
                            onChange={(e) => setTickets(e.target.value)}
                        />

                        <div className="d-flex gap-2 mt-3">
                            <button
                                type="submit"
                                className="btn-primary-ev"
                                disabled={selected.seats === 0}
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                className="btn-outline-ev"
                                onClick={() => setSelected(null)}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Events;
