import type { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/discord`,
        toPath: `https://discord.com/invite/8RyCbNn`,
        statusCode: 301,
    });
}
