import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
// tslint:disable-next-line: max-line-length
import { StringsObject, QuotesObject, DietsObject, CategoriesObject, PostsObject, GoalsObject, LevelsObject, TagsObject, EquipmentsObject, BodypartsObject, WorkoutsObject, MuscleObject, EquipmentObject, ExercisesObject } from '../interfaces/interfaces';

const Url = config.Url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  page = 0;

  constructor( private http: HttpClient ) { }

  private ejectQuery<T>( query: string ) {
    console.log(query)
    query = Url + query;
    console.log(query)
    console.log(Url)
    console.log(query)
    return this.http.get<T>( query );
  }

  getDataStrings() {
    const query = this.ejectQuery<StringsObject>('/json/data_strings.php');
    console.log(query)
    return this.ejectQuery<StringsObject>('/json/data_strings.php');
  }

  getDataMotivation() {
    const query = this.ejectQuery<QuotesObject[]>('/json/data_quotes.php');
    console.log(query)
    return this.ejectQuery<QuotesObject[]>('/json/data_quotes.php');
  }

  getDataFeaturedDiets() {
    const query = this.ejectQuery<DietsObject[]>('/json/data_diets.php?featured=1');
    console.log(query)
    return this.ejectQuery<DietsObject[]>('/json/data_diets.php?featured=1');
  }

  getDataCategories() {
    const query = this.ejectQuery<CategoriesObject[]>('/json/data_categories.php');
    console.log(query)
    return this.ejectQuery<CategoriesObject[]>('/json/data_categories.php');
  }

  getDataGoals() {
    const query = this.ejectQuery<GoalsObject[]>('/json/data_goals.php');
    console.log(query)
    return this.ejectQuery<GoalsObject[]>('/json/data_goals.php');
  }

  getDataLevels() {
    const query = this.ejectQuery<LevelsObject[]>('/json/data_levels.php');
    console.log(query)
    return this.ejectQuery<LevelsObject[]>('/json/data_levels.php');
  }

  getDataTags() {
    const query = this.ejectQuery<TagsObject[]>('/json/data_tags.php');
    console.log(query)
    return this.ejectQuery<TagsObject[]>('/json/data_tags.php');
  }

  getDataEquipments() {
    const query = this.ejectQuery<EquipmentsObject[]>('/json/data_equipments.php');
    console.log(query)
    return this.ejectQuery<EquipmentsObject[]>('/json/data_equipments.php');
  }

  getDataBodyparts() {
    const query = this.ejectQuery<BodypartsObject[]>('/json/data_bodyparts.php');
    console.log(query)
    return this.ejectQuery<BodypartsObject[]>('/json/data_bodyparts.php');
  }

  getDataFeaturedPosts() {
    const query = this.ejectQuery<PostsObject[]>('/json/data_posts.php?featured=1');
    console.log(query)
    return this.ejectQuery<PostsObject[]>('/json/data_posts.php?featured=1');
  }

  getDataRecentPosts(limit: number) {
    const query = this.ejectQuery<PostsObject[]>(`/json/data_posts.php?limit=${limit}`);
    console.log(query)
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?limit=${limit}`);
  }

  getDataWorkoutsByGoal(id: number) {
    const query = this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?goal=${id}`);
    console.log(query)
    return this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?goal=${id}`);
  }

  getDataWorkoutsByLevel(id: number) {
    const query = this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?level=${id}`);
    console.log(query)
    return this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?level=${id}`);
  }

  getDataExercisesByBodypart(id: number) {
    const query = this.ejectQuery<MuscleObject[]>(`/json/data_bodypart.php?id=${id}`);
    console.log(query)
    return this.ejectQuery<MuscleObject[]>(`/json/data_bodypart.php?id=${id}`);
  }

  getDataExercisesByEquipment(id: number) {
    const query = this.ejectQuery<EquipmentObject[]>(`/json/data_equipment.php?id=${id}`);
    console.log(query)
    return this.ejectQuery<EquipmentObject[]>(`/json/data_equipment.php?id=${id}`);
  }

  getDataDietsByCategory(id: number) {
    const query = this.ejectQuery<DietsObject[]>(`/json/data_diets.php?category=${id}`);
    console.log(query)
    return this.ejectQuery<DietsObject[]>(`/json/data_diets.php?category=${id}`);
  }

  getDataPostsByTag(id: number) {
    const query = this.ejectQuery<PostsObject[]>(`/json/data_posts.php?tag=${id}`);
    console.log(query)
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?tag=${id}`);
  }

  getDataExerciseById(id: number) {
    const query = this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
    console.log(query)
    return this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
  }

  getDataWorkoutById(id: number) {
    const query = this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
    console.log(query)
    return this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
  }

  getDataDietById(id: number) {
    const query = this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
    console.log(query)
    return this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
  }

  getDataPostById(id: number) {
    const query = this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
    console.log(query)
    return this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
  }

  getDataWorkoutExercisesByDay(id: number, day: number) {
    const query = this.ejectQuery<ExercisesObject[]>(`/json/data_days.php?id=${id}&day=${day}`);
    console.log(query)
    return this.ejectQuery<ExercisesObject[]>(`/json/data_days.php?id=${id}&day=${day}`);
  }

}
