export interface AttributeUpgradeData {
    /** The property name to replace. */
    replace: string;
    /** The new name for the property. */
    replaceWith: string;
    /** Whitelist where this replacement is made. If omitted it is made for all Classes. */
    whitelist?: {
        /** Replace the property only when its type is one of the given Classes. */
        elements?: string[];
    };
}
