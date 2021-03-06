/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	var input, dispose;

	return {
		c() {
			input = element("input");
			attr(input, "type", "file");
			input.multiple = true;
			dispose = listen(input, "change", ctx.input_change_handler);
		},

		m(target, anchor) {
			insert(target, input, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(input);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { files } = $$props;

	function input_change_handler() {
		files = this.files;
		$$invalidate('files', files);
	}

	$$self.$set = $$props => {
		if ('files' in $$props) $$invalidate('files', files = $$props.files);
	};

	return { files, input_change_handler };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["files"]);
	}
}

export default Component;