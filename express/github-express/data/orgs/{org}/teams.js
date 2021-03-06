'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /orgs/{org}/teams
 */
module.exports = {
    /**
     * summary: 
     * description: List teams.
     * parameters: org, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/teams',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/teams',
                operation: 'get',
                response: '403'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Create team.
In order to create a team, the authenticated user must be an owner of organization.

     * parameters: org, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id, body
     * produces: 
     * responses: 201, 403
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/teams',
                operation: 'post',
                response: '201'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/orgs/{org}/teams',
                operation: 'post',
                response: '403'
            }, callback);
        }
    }
};
