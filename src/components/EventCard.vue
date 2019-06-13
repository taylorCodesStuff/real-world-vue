<template>
    <router-link class="event-link" :to="{ name: 'event-show', params: { id: '1' } }">
        <div class="event-card -shadow">
            <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
            <h4 class="title">{{ event.title }}</h4>
            <i class="material-icons" id="person-icon">perm_identity</i>
            <span id="attending"> {{ event.attendees.length }} attending</span>
        </div>
    </router-link>
</template>

<script>

    export default {
        data() {
            return {
                event: {
                    id: 1,
                    title: 'Code for Philly',
                    date: 'Tues Aug 19, 2019',
                    time: '6:00',
                    attendees: [
                        { id: 'abc123', name: 'TH'},
                        { id: 'abc456', name: 'KS'},
                        { id: 'abc789', name: 'KL'}
                    ]
                }
            }
        },
    }
</script>

<style scoped>

#person-icon {
    font-size: 24px;
}

#attending {
    font-size: 20px;
    margin-left: 8px;
}

h4 {
    color: green;
}

#attendees {
    display: inline-block;
}

.event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
}
.event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
    margin: 0;
}

.event-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
}


</style>