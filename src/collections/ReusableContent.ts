import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { publishedOnly } from "../access/publishedOnly";
import { Banner } from "../blocks/Banner";
import { BlogContent } from "../blocks/BlogContent";
import { CallToAction } from "../blocks/CallToAction";
import { CardGrid } from "../blocks/CardGrid";
import { CaseStudiesHighlight } from "../blocks/CaseStudiesHighlight";
import { CaseStudyCards } from "../blocks/CaseStudyCards";
import { Code } from "../blocks/Code";
import { CodeFeature } from "../blocks/CodeFeature";
import { Content } from "../blocks/Content";
import { ContentGrid } from "../blocks/ContentGrid";
import { Form } from "../blocks/Form";
import { HoverHighlights } from "../blocks/HoverHighlights";
import { LinkGrid } from "../blocks/LinkGrid";
import { MediaBlock } from "../blocks/Media";
import { MediaContent } from "../blocks/MediaContent";
import { Slider } from "../blocks/Slider";
import { Steps } from "../blocks/Steps";
import { StickyHighlights } from "../blocks/StickyHighlights";

export const ReusableContent: CollectionConfig = {
  slug: "reusable-content",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: "Reusable Content",
    plural: "Reusable Contents",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      type: "blocks",
      required: true,
      blocks: [
        Banner,
        BlogContent,
        CallToAction,
        CardGrid,
        CaseStudyCards,
        CaseStudiesHighlight,
        Code,
        CodeFeature,
        Content,
        ContentGrid,
        Form,
        HoverHighlights,
        LinkGrid,
        MediaBlock,
        MediaContent,
        Slider,
        Steps,
        StickyHighlights,
      ],
    },
  ],
};
