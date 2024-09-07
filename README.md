# AI Styling
I believe this is how web development will look like in the future, we will write all code as prompts, rather than a fixed syntax.

> This is a weekend project that let you write prompt to style your elements, instead of CSS styles / tailwind classes to style the components.

## Syntax
As you can see below there's no fixed syntax on how you provide the prompt, you can clearly state what you want, give a vague idea or just tell it to copy a popular real world element's style
```tsx
export default function Home() {
  return (
    <ai.div
    prompt="full page, make all items center"
    >
      <ai.div
      prompt="social media post card component, black background white glow, fixed width"
      >
      <ai.p prompt="username">@zackozack</ai.p>
      <ai.p prompt="white text, with some up and down padding">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam numquam laboriosam excepturi omnis ut
      </ai.p>
      <ai.button
      prompt="tweet button, full width"
      >
        Tweet
      </ai.button>
      </ai.div>
    </ai.div>
  );
```
and here it is a component build with 0 CSS knowledge, but **Only with Prompts**
![image](https://github.com/user-attachments/assets/31a89bec-4ebd-4211-bf79-7123cab61fad)

Made with:
- Next.js / React
- Gemini ai

## Known Limitations
1. Limited CSS features: It doesn't support all CSS features like media queries, pseudo-classes, or pseudo-elements. This restricts the styling capabilities compared to regular CSS.
2. Difficulty with responsive design: Implementing responsive designs is more challenging without media queries
3. CSS generated is abstracted way from the developers, it can make debugging really hard.


