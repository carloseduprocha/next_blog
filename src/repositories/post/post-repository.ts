import { PostModel } from "@/models/post-models";

export interface PostRepository {
    findAll(): Promise<PostModel[]>;
    findById(id:string): Promise<PostModel>;
}
