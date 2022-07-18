# Deno Console Colors
## Usage
```typescript
import colors from "https://deno.land/x/console_colors@v0.0.2/mod.ts";
colors;
console.log('Deno'.cyan + ' '.text_underscore + 'Console'.green + ' '.text_underscore + 'Colors'.magenta);
console.log('OK'.cyan, 'check'.text_underscore);
console.log(`BG        ${'what will be here'.red}  here will be lose BG by RED reset     `.bg_blue);
```
<img src="hello.png">

## License
+ MIT License

## TODO
+ log decorator
+ delete properties when building production (unmount code)
+ design a compose code