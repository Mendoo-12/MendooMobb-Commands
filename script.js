// Add verified Twitch commands here as your kingdom expands.
const commands = [
  { name: '!clip', category: 'Chat Commands', description: 'Create a Twitch clip of the last 30s of the current stream.' },
  { name: '!bite', category: 'Chat Commands', description: 'Bite a fellow chatter. A fun way to interact with the community.' },
  { name: '!dihh', category: 'Chat Commands', description: 'Show off how big (or small) your dihh is to the chat.' },
  { name: '!puhh', category: 'Chat Commands', description: 'Show the chat what your puhh is looking like.' },
  { name: '!rizz', category: 'Chat Commands', description: 'Check how much rizz you have.' },
  { name: '!slap', category: 'Chat Commands', description: 'Take a chance to slap another chatter.' },
  { name: '!spit', category: 'Chat Commands', description: 'Take a chance to spit on another chatter.' },
  { name: '!tetas', category: 'Chat Commands', description: 'Show the chat your tetas.' },
  { name: '!goon', category: 'Chat Commands', description: 'Goon in chat, MendooBot will keep count.' },
  { name: '!followage', category: 'Chat Commands', description: 'Check how long you have been following AyeMendoo.' },
  { name: '!watchtime', category: 'Chat Commands', description: 'Check how long you have been watching the streams.' },
  { name: '!watchstreak', category: 'Chat Commands', description: 'Check your current twitch watch streak.' },
  { name: '!sr', category: 'Chat Commands', description: 'Request a song to be queued during the stream (asuming the music isn\'t playing).' },
  { name: '!merch', category: 'Chat Commands', description: 'Check out the MNDZ website for the latest merch.' },
  { name: '!dono', category: 'Chat Commands', description: 'While never expected but always appreciated, this takes you to the donation page for AyeMendoo.' },
  { name: '!discord', category: 'Chat Commands', description: 'Join the official MendooMobb Discord server to stay tuned to any news or just come hang out.' },
  { name: '!lurk', category: 'Chat Commands', description: 'Lets AyeMendoo know you are lurking in the chat.' },
  { name: '!vanish', category: 'Chat Commands', description: 'Times you out for 1s to delete anything sus you might\'ve said.' },
  { name: '!socials', category: 'Chat Commands', description: 'Provides a link to all of AyeMendoo\'s socials.' },
  { name: '!gamble', category: 'Casino', description: 'Place a wager and hope for a lucky outcome.', usage: '!gamble 100' },
  { name: '!blackjack', category: 'Casino', description: 'Place a wager for a chance to win at blackjack, it is only one hand though.', usage: '!blackjack 100' },
  { name: '!highlow', category: 'Casino', description: 'Place a wager and choose whether the outcome will be high or low.', usage: '!highlow 100 high' },
  { name: '!roulette', category: 'Casino', description: 'Place a wager on red, black or green for a chance to win.', usage: '!roulette 100 (red/black/green)' },
  { name: '!flip', category: 'Casino', description: 'Flip a coin for a 50/50 chance to win.', usage: '!flip 100' },
  { name: '!dice', category: 'Casino', description: 'Roll the dice for a chance to win.', usage: '!dice 100' },
  { name: '!work', category: 'Economy', description: 'Work to earn MendoCoins from the kingdom economy. The work system has a two-minute cooldown.' },
  { name: '!daily', category: 'Economy', description: 'Claim your daily reward from the Treasury. Every consecutive stream you claim your daily reward, the more MendoCoins you will receive.' },
  { name: '!loan', category: 'Economy', description: 'Request a loan from the Royal Bank. Interest will be applied to your balance.', usage: '!loan 1000' },
  { name: '!loans', category: 'Economy', description: 'Check all current loans from all chatters.' },
  { name: '!debt', category: 'Economy', description: 'Check your current debt from the Royal Bank.' },
  { name: '!payloan', category: 'Economy', description: 'Pay off all or a portion of your loan.', usage: '!payloan 500 or !payloan all' },
  { name: '!credit', category: 'Economy', description: 'Check what your current credit status is.' },
  { name: '!stocks', category: 'Economy', description: 'Check the current stock market and see what stocks are available to buy or sell.' },
  { name: '!buystock', category: 'Economy', description: 'Buy a stock from the stock market.', usage: '!buystock (stock name) (# of shares)' },
  { name: '!sellstock', category: 'Economy', description: 'Sell a stock from your portfolio.', usage: '!sellstock (stock name) (# of shares)' },
  { name: '!portfolio', category: 'Economy', description: 'View your stock portfolio.' },
  { name: '!treasury', category: 'Economy', description: 'View the Royal Treasury\'s balance.' },
  { name: '!marketnews', category: 'Economy', description: 'View the latest news about the stock market.' },
  { name: '!rroulette', category: 'Chat Games', description: 'Play a round of Russian roulette alone, with others or 1v1.' },
  { name: '!bounty', category: 'Chat Games', description: 'Place a bounty on another chatter. Costs a minimum of 75k MendoCoins.', usage: '!bounty @user 75000' },
  { name: '!Kill', category: 'Chat Games', description: 'Allows you to kill a chatter with a bounty and collect reward, so long as you have a weapon.', usage: '!kill @user' },
  { name: '!bounties', category: 'Chat Games', description: 'View all active bounties in the kingdom.' },
  { name: '!killlist', category: 'Chat Games', description: 'View top killers in the kingdom.' },
  { name: '!clash', category: 'Chat Games', description: 'Challenge another player for MendoCoins, if challenged, accept or deny request with !accept/!deny.', usage: '!clash @user 1000' },
  { name: '!heist', category: 'Chat Games', description: 'Starts a heist against the kingdoms treasury. If another player started one, type !joinheist to be part of it. 3 minimum players required and chance of success increases with more participants. 5K entrance fee for all players.' },
  { name: '!shop', category: 'Markets', description: 'View the Royal Shop and see what items are available for purchase. For more pages use:', usage: '!shop 1/2' },
  { name: '!shopbuy', category: 'Markets', description: 'Buy an item from the Royal Shop.', usage: '!shopbuy [itemId] [quantity]' },
  { name: '!blackmarket', category: 'Markets', description: 'View the black market and see what items are available for purchase.' },
  { name: '!buy', category: 'Markets', description: 'Buy an item from the black market.', usage: '!buy [itemId]' },
  { name: '!inventory', category: 'Markets', description: 'View your inventory and see what items you own.' },
  { name: '!equip', category: 'Markets', description: 'Equip an item from your inventory, usually a weapon for bounties.', usage: '!equip [itemId]' },
];
const pages = [...document.querySelectorAll('.page')]; const links = [...document.querySelectorAll('.nav-link')]; const sidebar = document.getElementById('sidebar'); const breadcrumb = document.getElementById('breadcrumb');
function navigate() { let id = location.hash.slice(1) || 'home'; if (!document.getElementById(id) || !pages.some(p => p.id === id)) id = 'home'; pages.forEach(p => p.classList.toggle('active', p.id === id)); links.forEach(l => l.classList.toggle('active', l.dataset.page === id)); breadcrumb.textContent = ({ home: 'ROYAL HALL', commands: 'TWITCH COMMANDS', economy: 'ROYAL ECONOMY', casino: 'THE CASINO', bank: 'ROYAL BANK', stocks: 'STOCK EXCHANGE', shop: 'ROYAL SHOP', lore: 'KINGDOM LORE' })[id]; sidebar.classList.remove('open'); window.scrollTo(0, 0) }
window.addEventListener('hashchange', navigate); document.getElementById('menuBtn').addEventListener('click', () => sidebar.classList.toggle('open')); navigate();
let category = 'All'; const filters = document.getElementById('filters'); const list = document.getElementById('commandList'); const search = document.getElementById('commandSearch');

function render() {
  const categories = ['All', ...new Set(commands.map(c => c.category))]; filters.replaceChildren(); categories.forEach(c => {
    const b = document.createElement('button'); b.className = 'filter' + (category === c ? ' active' : ''); b.textContent = c; b.addEventListener('click', () => {
      category = c; render();
    });

    filters.append(b);
  });

  list.replaceChildren();

  const term = search.value.toLowerCase().trim();

  const matched = commands.filter(c =>
    (category === 'All' || c.category === category) &&
    [c.name, c.category, c.description, c.usage]
      .some(x => String(x ?? '').toLowerCase().includes(term))
  );

  if (!matched.length) {
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = 'No matching commands found.';
    list.append(p);
  }


  matched.forEach(c => {
    const card = document.createElement('article');
    card.className = 'command-card';

    const tag = document.createElement('span');
    tag.className = 'command-tag';
    tag.textContent = c.category;

    const title = document.createElement('h3');
    title.textContent = c.name;

    const desc = document.createElement('p');
    desc.textContent = c.description;

    card.append(tag, title, desc);

    // Copy the usage example when available,
    // otherwise copy the command name.
    const commandText =
      typeof c.usage === 'string' && c.usage.trim() !== ''
        ? c.usage
        : c.name;

    const copyRow = document.createElement('div');
    copyRow.className = 'command-copy-row';

    const code = document.createElement('code');
    code.textContent = commandText;

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'command-copy-btn';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', `Copy ${c.name}`);

    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(commandText);

        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 1800);
      } catch (error) {
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 1800);
      }
    });

    copyRow.append(code, copyButton);
    card.append(copyRow);
    list.append(card);
  });

}

search.addEventListener('input', render); render();
