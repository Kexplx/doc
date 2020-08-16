messageMapping = {
'=0': 'No message',
'=1': 'One message',
other: '# messages',
};

<p>{{ messages.length | i18nPlural: messageMapping }}</p>