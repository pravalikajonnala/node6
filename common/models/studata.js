'use strict';

module.exports = function(Studata) {
    Studata.getName=function(id,callback)
     {
         console.log(id);
         Studata.findById(id).then(res => {
             {
             console.log('response',res);
             callback(null, res);
            }
         }).catch(err => {
           callback(err,null);
        });
     }
     Studata.remoteMethod(
         'getName',
         {
             returns: { root: true, type: 'object' },
             accepts: [{
                 arg: 'id',
                 type: 'number',
                 required: false,
                 http: {
                     source: 'query'
                 }
            }],
             http: { path: '/getName', verb: 'get' },
        }
      );
   

    Studata.postName=function(data,callback)
     {
         console.log(data);
         Studata.create(data).then(res => {
             {
             console.log('response',res);
             callback(null, res);
            }
         }).catch(err => {
           callback(err,null);
        });
     }
     Studata.remoteMethod(
         'postName',
         {
             returns: { root: true, type: 'object' },
             accepts: [{
                 arg: 'data',
                 type: 'object',
                 required: true,
                 http: {
                     source: 'body'
                 }
            }],
             http: { path: '/postName', verb: 'post' },
        }
      );
   
      Studata.upsert = function (data,callback)
      {
            console.log(data);
           Studata.upsert(data).then(res => {
       
               console.log('response',res);
               callback(null, res);
           }).catch(err => {
            callback(err,null);
          });
       }
       Studata.remoteMethod(
           'upsert',
          {
           returns: { root: true, type: 'object' },
           accepts: [{
                 arg :'data',
                  type:'object',
                  required:true,
                http: {
                    source: 'body'
                }
                }],
            http: { path: '/upsert', verb: 'put' },
        }
     );

     Studata.delete = function (id,callback)
     {
           console.log(id);
          Studata.destroyById(id).then(res => {
      
              console.log('response',res);
              callback(null, res);
          }).catch(err => {
           callback(err,null);
         });
      }
      Studata.remoteMethod(
          'delete',
         {
          returns: { root: true, type: 'object' },
          accepts: [{
                arg :'id',
                 type:'number',
                 required:true,
               http: {
                   source: 'query'
               }
               }],
           http: { path: '/delete', verb: 'delete' },
       }
    ); 
    Studata.findone= function(id,callback)
     {
           console.log(id);
          Studata.findOne(id).then(res => {
      
              console.log('response',res);
              callback(null, res);
          }).catch(err => {
           callback(err,null);
         });
      }
      Studata.remoteMethod(
          'findone',
         {
          returns: { root: true, type: 'object' },
          accepts: [{
                arg :'id',
                 type:'number',
                 required:true,
               http: {
                   source: 'query'
               }
               }],
           http: { path: '/findone', verb: 'get' },
       }
    );
    
};

