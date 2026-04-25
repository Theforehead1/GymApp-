const programme = {
  "Day 1": {
    title: "Full Body Push + Shoulders",
    focus: "Shoulder priority with controlled pressing and triceps work.",
    time_tip: "Superset lateral raises with rope pushdowns.",
    exercises: [
      ["Back Squat", "2", "6–8", "1–2 RIR"],
      ["Incline Dumbbell Press", "2", "8–10", "1 RIR"],
      ["Seated Dumbbell Shoulder Press", "2", "6–10", "1 RIR"],
      ["Romanian Deadlift", "2", "8–10", "1–2 RIR"],
      ["Cable Lateral Raise", "2", "12–20", "0–1 RIR"],
      ["Rope Tricep Pushdown", "2", "10–15", "0–1 RIR"]
    ]
  },
  "Day 2": {
    title: "Full Body Pull + Biceps",
    focus: "Back work plus biceps from different angles.",
    time_tip: "Superset rear delts with curls.",
    exercises: [
      ["Trap Bar Deadlift or Deadlift", "2", "4–6", "1–2 RIR"],
      ["Pull-Ups or Lat Pulldown", "2", "8–10", "1 RIR"],
      ["Chest-Supported Row", "2", "8–12", "1 RIR"],
      ["Bulgarian Split Squat", "2", "8–10 each leg", "1–2 RIR"],
      ["Rear Delt Cable Fly", "2", "12–20", "0–1 RIR"],
      ["Incline Dumbbell Curl", "2", "10–15", "0–1 RIR"],
      ["Hammer Curl", "1", "12–15", "0–1 RIR"]
    ]
  },
  "Day 3": {
    title: "Full Body Legs + Delts",
    focus: "Legs, pressing, pulling, and extra delt volume.",
    time_tip: "Superset lateral raises with cable crunches.",
    exercises: [
      ["Leg Press", "2", "8–12", "1 RIR"],
      ["Dumbbell Bench Press", "2", "8–10", "1 RIR"],
      ["Seated Cable Row", "2", "10–12", "1 RIR"],
      ["Lying or Seated Leg Curl", "2", "10–15", "0–1 RIR"],
      ["Machine Shoulder Press", "2", "8–12", "0–1 RIR"],
      ["Dumbbell Lateral Raise", "2", "12–20", "0–1 RIR"],
      ["Cable Crunch", "2", "10–15", "1 RIR"]
    ]
  },
  "Day 4": {
    title: "Full Body Upper + Arms",
    focus: "Heavier upper session with direct arm emphasis.",
    time_tip: "Superset preacher curls with overhead tricep extensions.",
    exercises: [
      ["Hack Squat or Front Squat", "2", "6–10", "1–2 RIR"],
      ["Flat Barbell Bench Press", "2", "6–8", "1 RIR"],
      ["T-Bar Row or Barbell Row", "2", "8–10", "1 RIR"],
      ["Hip Thrust", "2", "8–12", "1 RIR"],
      ["Arnold Press", "2", "8–10", "0–1 RIR"],
      ["Preacher Curl", "2", "8–12", "0–1 RIR"],
      ["Overhead Cable Tricep Extension", "2", "10–15", "0–1 RIR"]
    ]
  },
  "Day 5": {
    title: "Full Body Pump + Arms and Shoulders",
    focus: "Hypertrophy pump day with shoulders and arms brought forward.",
    time_tip: "Superset cable curls with rope pushdowns. Pair lateral raises with reverse pec deck if gym layout allows.",
    exercises: [
      ["Goblet Squat or Hack Squat", "2", "10–15", "1 RIR"],
      ["Lat Pulldown", "2", "10–12", "1 RIR"],
      ["Incline Machine Press", "2", "10–12", "1 RIR"],
      ["Dumbbell Romanian Deadlift", "2", "10–12", "1 RIR"],
      ["Seated Lateral Raise", "2", "15–25", "0–1 RIR"],
      ["Reverse Pec Deck", "2", "15–20", "0–1 RIR"],
      ["Cable Curl", "2", "10–15", "0–1 RIR"],
      ["Rope Pushdown", "2", "10–15", "0–1 RIR"]
    ]
  }
};

let currentDay = "Day 1";
const tabs = document.getElementById("tabs");
const content = document.getElementById("content");

function completionKey(day, i) {
  return `done-${day}-${i}`;
}

function renderTabs() {
  tabs.innerHTML = Object.keys(programme).map(day => `
    <button class="tab ${day === currentDay ? "active" : ""}" onclick="selectDay('${day}')">${day}</button>
  `).join("");
}

function renderDay() {
  const d = programme[currentDay];

  content.innerHTML = `
    <section class="card">
      <div class="day-head">
        <div>
          <h2>${currentDay}: ${d.title}</h2>
          <p class="focus">${d.focus}</p>
        </div>
        <span class="pill">45–60 mins</span>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Done</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Effort</th>
            </tr>
          </thead>
          <tbody>
            ${d.exercises.map((ex, i) => `
              <tr>
                <td><input class="check" type="checkbox" ${localStorage.getItem(completionKey(currentDay, i)) === "true" ? "checked" : ""} onchange="saveDone('${currentDay}', ${i}, this.checked)"></td>
                <td><strong>${ex[0]}</strong></td>
                <td>${ex[1]}</td>
                <td>${ex[2]}</td>
                <td>${ex[3]}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="note"><strong>Time tip:</strong> ${d.time_tip}</div>
    </section>

    <section class="grid">
      <div class="card info">
        <h3>Method</h3>
        <ul>
          <li>Compounds: stop at 1–2 reps in reserve.</li>
          <li>Machines, cables and isolation: 0–1 reps in reserve.</li>
          <li>Final isolation set can occasionally reach technical failure.</li>
          <li>Failure means no more clean reps, not form goblin chaos.</li>
        </ul>
      </div>
      <div class="card info">
        <h3>Progression</h3>
        <p>Use double progression. When you hit the top of the rep range on all working sets with clean form, increase the weight next time.</p>
        <p>For lateral raises, curls and pushdowns, add reps before weight.</p>
      </div>
    </section>

    <section class="card info">
      <h3>Warm-up</h3>
      <p>Keep it short: 5 minutes light cardio, 1–2 mobility drills, then 2–3 ramp-up sets before your first big lift.</p>
    </section>

    <button class="reset" onclick="resetDay()">Reset this day’s ticks</button>
  `;
}

function selectDay(day) {
  currentDay = day;
  renderTabs();
  renderDay();
}

function saveDone(day, i, checked) {
  localStorage.setItem(completionKey(day, i), checked ? "true" : "false");
}

function resetDay() {
  programme[currentDay].exercises.forEach((_, i) => localStorage.removeItem(completionKey(currentDay, i)));
  renderDay();
}

let timerInterval = null;
let seconds = 90;

function setTimer(s) {
  seconds = s;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById("timerDisplay").textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      if ("vibrate" in navigator) navigator.vibrate([180, 80, 180]);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

renderTabs();
renderDay();
updateTimerDisplay();
