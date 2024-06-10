import type { BlobCodeProps } from '~/components/types'

export function css(props: BlobCodeProps) {
  return `<span class="text-warning">.blur {</span>
<span class="text-accent">opacity</span>: <span class="text-info">${props.opacity}</span>;
<span class="text-accent">filter</span>: <span class="text-info">blur(${props.blur})</span>;
<span class="text-warning">}</span>
<span class="text-warning">.blob {</span>
<span class="text-accent">clip-path</span>:<span class="text-info"> polygon(${props.path.trim()})</span>
<span class="text-warning">}</span>
`
}

export function html() {
  return `&lt;<span class="text-info">div</span><span class="text-accent"> class</span><span class="text-warning">="blur"</span> &gt;
  &lt;<span class="text-info">div</span><span class="text-accent"> class</span><span class="text-warning">="blob"</span> /&gt;
&lt;/<span class="text-info">div</span>&gt;`
}
