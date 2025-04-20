import type { Hideable } from "./types";

export interface ResearchInterests extends Hideable {
  text: string;
}

export const RESEARCH_INTERESTS: ResearchInterests = {
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis ex sit amet leo aliquam rhoncus. Morbi ut ante nisi. Sed dictum mauris justo, et convallis nisi ultricies at. Mauris a dignissim odio. In faucibus orci id ante posuere, et sollicitudin lacus eleifend. Duis eu massa euismod, semper orci quis, aliquet risus. Nullam ut ex eget quam condimentum aliquam. Nullam luctus sapien quis enim ultrices pulvinar.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod hendrerit tortor. Duis malesuada elit vitae enim luctus porta. Duis tempus faucibus nisi eget sodales. Phasellus convallis varius enim, in aliquet urna posuere vel. Fusce semper nibh vitae iaculis lobortis. Sed hendrerit nunc
`,
  isHidden: true,
}