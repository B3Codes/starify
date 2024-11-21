# Starify

![npm version](https://img.shields.io/npm/v/starify)
![build status](https://img.shields.io/github/actions/workflow/status/yourusername/starify/ci.yml)
![license](https://img.shields.io/github/license/yourusername/starify)

**Starify** is a lightweight, customizable, and accessible React library for creating elegant star rating systems. Perfect for product reviews, blog comments, or any rating widget.

---

## Features

- ⭐ **Customizable**: Adjust star size, colors, and symbols.
- 🎯 **Accessible**: Fully keyboard and screen-reader compatible.
- 🚀 **Lightweight**: Optimized for fast integration.
- 🌟 **Responsive**: Scales beautifully across all devices.

---

## Installation

Install Starify via npm:

```bash
npm install starify
```

---

## Usage

### Basic Example:

```javascript
import { Star, StarRatingProvider } from "starify";

const App = () => (
  <StarRatingProvider totalStars={5}>
    <div>
      {[...Array(5)].map((_, index) => (
        <Star key={index} star={index + 1} size="2em" />
      ))}
    </div>
  </StarRatingProvider>
);

export default App;
```

---

## API Documentation

### `Star` Component Props

| Prop            | Type   | Default  | Description                      |
| --------------- | ------ | -------- | -------------------------------- |
| `star`          | Number | -        | The star number in the sequence. |
| `size`          | String | `'1em'`  | Font size for the star symbol.   |
| `filledColor`   | String | `'gold'` | Color of filled stars.           |
| `unfilledColor` | String | `'gray'` | Color of unfilled stars.         |
| `symbol`        | String | `'★'`    | Symbol for stars.                |

### `StarRatingProvider` Props

| Prop         | Type   | Default | Description                                 |
| ------------ | ------ | ------- | ------------------------------------------- |
| `totalStars` | Number | `5`     | Total number of stars in the rating system. |
| `children`   | Node   | -       | React components wrapped by the provider.   |

---

## Accessibility

Starify is designed with accessibility in mind:

- Includes ARIA roles for screen readers.
- Supports keyboard navigation with `ArrowLeft`, `ArrowRight`, and `Enter`.

---

## Testing

Run tests and check coverage:

```bash
npm test -- --coverage
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
