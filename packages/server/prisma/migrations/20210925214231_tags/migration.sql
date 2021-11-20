-- CreateTable
CREATE TABLE "Tag" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_tags" (
    "tagId" UUID NOT NULL,
    "postId" UUID NOT NULL,

    PRIMARY KEY ("tagId","postId")
);

-- AddForeignKey
ALTER TABLE "post_tags" ADD FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_tags" ADD FOREIGN KEY ("tagId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
