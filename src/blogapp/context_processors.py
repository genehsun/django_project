from blogapp.models import Category
from blogapp.models import Post
from collections import Counter

# context processor functions
def all_categories(request):
    all_categories = Category.objects.all()
    #for category in all_categories:
    #    print category.post_set.count()
    return {'all_categories':all_categories,}

def all_tag_dicts(request):
    all_tags = []
    all_tag_dicts = {}
    for post in Post.objects.all():
        for tag in post.tags.all():
            all_tags.append(tag,)
    #print all_tags
    
    all_tag_dicts = dict(Counter(all_tags))   
    print all_tag_dicts
    #for itag in all_tag_dicts:
    #    print itag, all_tag_dicts[itag]
        
    return {'all_tag_dicts':all_tag_dicts,}
