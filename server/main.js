import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';



if(Meteor.isServer){
    //When meteor starts up, create a new Mongo collection if not existing
const Properties = new Mongo.Collection('properties');
    
    //Configures a Restivus API
    const Api = new Restivus({
        useDefaultAuth: true,
        prettyJson: true
      });
      //Generates POST, GET on '/api/properties' and GET, PUT DELETE on 'api/properties/:id'
    Api.addCollection(Properties, {
      excludedEndpoints: ['patch', 'getAll'],
      routeOptions: {
        authRequired: true
      },
      endpoints: {
        post: {
          authRequired: true
        },
        put: {
          authRequired: true
        },
        delete: {
          roleRequired: 'admin'
        }
      }
    });

    Api.addCollection(Meteor.users, {
        excludedEndpoints: ['getAll', 'put', 'patch'],
        routeOptions: {
          authRequired: false
        },
        endpoints: {
          post: {
            authRequired: false
          },
          delete: {
            roleRequired: 'admin'
          }
        }
    });
    //Adds a cutom route for getting a user's property/properties
    Api.addRoute('users/:userId/properties', {
        get: function (){
          const userId= this.urlParams.userId;
          const properties = Properties.find({owner: userId}).fetch()
      
          return{
            status: 'success',
            data: properties
          }
        }
          
        
    
      
    })

}
