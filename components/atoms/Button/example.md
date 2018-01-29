The classic button, in different colors, sizes, and states

### Standard Button

```js
<Button>Standard</Button>
```

### Colours

```js
<nav className='bea-sg-nav'>
  <Button colour='white'>White</Button>
  <Button colour='light'>Light</Button>
  <Button colour='dark'>Dark</Button>
  <Button colour='black'>Black</Button>
</nav>
```

```js
<nav className='bea-sg-nav'>
  <Button colour='primary'>Primary</Button>
  <Button colour='link'>Link</Button>
  <Button colour='info'>Info</Button>
  <Button colour='success'>Success</Button>
  <Button colour='warning'>Warning</Button>
  <Button colour='danger'>Danger</Button>
</nav>
```

### Sizes

```js
<nav className='bea-sg-nav'>
  <Button size='small'>Small</Button>
  <Button>Normal</Button>
  <Button size='medium'>Medium</Button>
  <Button size='large'>Large</Button>
</nav>
```

### Outlined

```js
<nav className='bea-sg-nav'>
  <Button colour='primary' outlined={true}>Primary</Button>
  <Button colour='link' outlined={true}>Link</Button>
  <Button colour='info' outlined={true}>Info</Button>
  <Button colour='success' outlined={true}>Success</Button>
  <Button colour='warning' outlined={true}>Warning</Button>
  <Button colour='danger' outlined={true}>Danger</Button>
</nav>
```

### Inverted

```js
<nav className='bea-sg-nav'>
  <Button colour='primary' inverted={true}>Primary</Button>
  <Button colour='link' inverted={true}>Link</Button>
  <Button colour='info' inverted={true}>Info</Button>
  <Button colour='success' inverted={true}>Success</Button>
  <Button colour='warning' inverted={true}>Warning</Button>
  <Button colour='danger' inverted={true}>Danger</Button>
</nav>
```

### Rounded

```js
<nav className='bea-sg-nav'>
  <Button colour='primary' rounded={true}>Primary</Button>
  <Button colour='link' rounded={true}>Link</Button>
  <Button colour='info' rounded={true}>Info</Button>
  <Button colour='success' rounded={true}>Success</Button>
  <Button colour='warning' rounded={true}>Warning</Button>
  <Button colour='danger' rounded={true}>Danger</Button>
</nav>
```

### States

```js
<nav className='bea-sg-nav'>
  <Button colour='primary' state='loading'>Loading</Button>
  <Button colour='link' state='hovered'>Hovered</Button>
  <Button colour='info' state='focused'>Focused</Button>
  <Button colour='success' state='active'>Active</Button>
  <Button colour='warning' state='static'>Static</Button>
  <Button colour='danger' disabled>Disabled</Button>
</nav>
```
