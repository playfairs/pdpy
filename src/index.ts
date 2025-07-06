import { bots } from './bots';

const app = document.getElementById('app');

if (app) {
    const title = document.createElement('h1');
    title.textContent = 'Discord Bots Homepage';
    app.appendChild(title);

    const botList = document.createElement('ul');

    bots.forEach(bot => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = bot.repository;
        link.textContent = `${bot.name} - Status: ${bot.status}`;
        link.target = '_blank';
        listItem.appendChild(link);
        botList.appendChild(listItem);
    });

    app.appendChild(botList);
} else {
    console.error('App element not found');
}