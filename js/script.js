const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const btnOpen = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Check the DOM Object methods and properties
// console.dir(btnOpen);

// Clear the existing HTML list of facts
factsList.innerHTML = '';

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    'https://ryqnvwvxmbqyenkulifg.supabase.co/rest/v1/facts',
    {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cW52d3Z4bWJxeWVua3VsaWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMjU1NDMsImV4cCI6MTk5NTYwMTU0M30.yBq5yf4YQfB7MDaRHEawWW698yqCs8nhGl4nvOuMSsc',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cW52d3Z4bWJxeWVua3VsaWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMjU1NDMsImV4cCI6MTk5NTYwMTU0M30.yBq5yf4YQfB7MDaRHEawWW698yqCs8nhGl4nvOuMSsc',
      },
    }
  );
  const data = await res.json();

  console.log(data);
  createFactsList(data);
}

// Create DOM elements: Render facts in list
// createFactsList(initialFacts);

function createFactsList(dataArr) {
  const htmlArr = dataArr.map(
    (fact) => `
    <li class="fact">${fact.text}
        <p>
            ${fact.text}
                <a
                    class="source"
                    href="${fact.source}"
                    target="_blank"
                    >(Source)</a>
        </p>
        <span class="tag" style="background-color: ${
          CATEGORIES.find((cat) => cat.name === fact.category).color
        }"
        >${fact.category}</span>
    </li>`
  );

  const html = htmlArr.join('');
  factsList.insertAdjacentHTML('afterbegin', html);
}

// Toggle form visibility
btnOpen.addEventListener('click', function () {
  form.classList.toggle('hidden');
  form.classList.contains('hidden')
    ? (btnOpen.textContent = 'Share a Fact')
    : (btnOpen.textContent = 'Close');
});
